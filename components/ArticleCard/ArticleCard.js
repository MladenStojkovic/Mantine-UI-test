import React, { useState } from "react";
import Link from "next/link";
import { notifications } from "@mantine/notifications";
import {
  Button,
  Card,
  Flex,
  Text,
  Avatar,
  Divider,
  Group
} from "@mantine/core";
import {
  IconShare,
  IconBookmark,
  IconMessageCircle,
} from "@tabler/icons-react";
import HamburgerMenu from "./components/HamburgerMenu";
import Replies from "./components/Replies";
import userStore from "@/store/user";
import { observer } from "mobx-react";

const ArticleCard = observer(
  ({
    article,
    visibleViews,
    visibleSaves = true,
    visibleShare = true,
    visibleReply = true,
    editable = true,
  }) => {
    const [showMore, setShowMore] = useState(false);
    const [showReplies, setShowReplies] = useState(false);

    const socialBtnStyle = (theme) => ({
      root: {
        padding: "0",
        marginRight: "30px",
        "&:not([data-disabled]):hover": {
          backgroundColor: "transparent",
        },
        "&:active": {
          transform: "none",
        },
      },
    });

    const shareHandler = (postId) => {
      notifications.show({ message: "Copied to Clipboard" });
      const postLink = `https://falseadress/${postId}`;
      navigator.clipboard.writeText(postLink);
    };

    const isSubscribedCompany = userStore.subscribedCompanies.includes(article.user.company)
    const isSubscribedUser = userStore.subscribedUsers.includes(article.user.name)

    return (
      <Card shadow style={{marginBottom: '30px'}}>
        <Flex>
          {!isSubscribedCompany ? <Text onClick={() => userStore.subscribeCompany(article.user.company)} span color="dimmed" td="underline" size="xs">
            Subscribe to {article.user.company}
          </Text> :
          <Text onClick={() => userStore.unsubscribeCompany(article.user.company)} span color="dimmed" td="underline" size="xs">
            Unsubscribe from {article.user.company}
          </Text>}
          <Divider orientation="vertical" style={{ margin: "0 10px" }} />
          {!isSubscribedUser ? <Text onClick={() => userStore.subscribeUser(article.user.name)} span color="dimmed" td="underline" size="xs">
            Subscribe
          </Text> :
          <Text onClick={() => userStore.unsubscribeUser(article.user.name)} span color="dimmed" td="underline" size="xs">
            Unsubscribe
          </Text>}
        </Flex>
        <Divider my="xs" />
        <Group>
          <Avatar src={article?.user?.image} radius="xl" />

          <div style={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              {article?.user?.name}
            </Text>

            <Text span color="dimmed" td="underline" size="xs">
              <Link href="">{article?.user?.company}</Link>
            </Text>
            <Text span color="dimmed" size="xs">
              {" "}
              {article?.user?.position} | {article?.datePosted}
            </Text>
          </div>
          {editable ? <HamburgerMenu /> : null}
        </Group>
        {!showMore ? (
          <>
            <Text> {article.description.substring(0, 99)}... </Text>
            <Divider
              my="xs"
              labelPosition="center"
              label={
                <>
                  <Button
                    onClick={() => setShowMore(true)}
                    variant="default"
                    radius="xl"
                  >
                    Show More
                  </Button>
                </>
              }
              sx={{
                ".mantine-Divider-label::before, .mantine-Divider-label::after":
                  {
                    margin: "0",
                  },
              }}
            />
          </>
        ) : (
          <>
            <Text>{article.description}</Text>
            <Divider my="xs" />
          </>
        )}
        <Flex>
          {visibleSaves ? (
            <Button
              leftIcon={<IconBookmark />}
              variant="subtle"
              color="gray"
              styles={socialBtnStyle}
            >
              3 Saves
            </Button>
          ) : null}
          {visibleShare ? (
            <Button
              onClick={() => shareHandler("123")}
              leftIcon={<IconShare />}
              variant="subtle"
              color="gray"
              styles={socialBtnStyle}
            >
              1 Share
            </Button>
          ) : null}
          {visibleReply ? (
            <Button
              onClick={() => setShowReplies((prevState) => !prevState)}
              leftIcon={<IconMessageCircle />}
              variant="subtle"
              color="gray"
              styles={socialBtnStyle}
            >
              Reply
            </Button>
          ) : null}
        </Flex>
        {showReplies ? <Replies replies={article.replies} /> : null}
      </Card>
    );
  }
);

export default ArticleCard;
