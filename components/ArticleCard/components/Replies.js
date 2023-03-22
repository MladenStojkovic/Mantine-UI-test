import React from "react";
import { Timeline, Text, Avatar, Textarea, Button } from "@mantine/core";
import {
  IconDeviceFloppy
} from "@tabler/icons-react";

export default function Replies({ replies }) {
  return (
    <>
    <Timeline bulletSize={24} style={{marginTop: '10px'}}>
      {replies.map((reply) => {
        return (
          <Timeline.Item
            key={reply.time}
            bullet={<Avatar size={24} src={reply.picture}></Avatar>}
            title={reply.name}
          >
            <Text color="dimmed" size="sm">
              {reply.reply}
            </Text>
            <Text size="xs" mt={4}>
              {reply.time}
            </Text>
          </Timeline.Item>
        );
      })}
    </Timeline>
    <Avatar size={24} style={{margin: '10px 0'}}></Avatar>
    <Textarea multiline style={{marginBottom: '10px'}}/>
    <Button leftIcon={<IconDeviceFloppy />}>Submit</Button>
    </>
  );
}
