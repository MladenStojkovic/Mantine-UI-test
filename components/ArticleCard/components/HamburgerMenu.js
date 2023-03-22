import React from 'react'
import { Group, ActionIcon, Menu } from '@mantine/core';
import {
  IconMessages,
  IconNote,
  IconReportAnalytics,
  IconTrash,
  IconDots,
} from '@tabler/icons-react';

export default function HamburgerMenu() {
  return (
    <Group spacing={0} position="left">
          <Menu
            transitionProps={{ transition: 'pop' }}
            withArrow
            position="bottom-end"
            withinPortal
          >
            <Menu.Target>
              <ActionIcon>
                <IconDots size="1rem" stroke={1.5} />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item icon={<IconMessages size="1rem" stroke={1.5} />}>Action 1</Menu.Item>
              <Menu.Item icon={<IconNote size="1rem" stroke={1.5} />}>Action 2</Menu.Item>
              <Menu.Item icon={<IconReportAnalytics size="1rem" stroke={1.5} />}>
                Action 3
              </Menu.Item>
              <Menu.Item icon={<IconTrash size="1rem" stroke={1.5} />} color="red">
                Action 4
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
  )
}
