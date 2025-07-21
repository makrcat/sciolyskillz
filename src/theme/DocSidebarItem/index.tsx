import React, {type ReactNode} from 'react';
import DocSidebarItem from '@theme-original/DocSidebarItem';
import type DocSidebarItemType from '@theme/DocSidebarItem';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof DocSidebarItemType>;

export default function DocSidebarItemWrapper(props: Props): ReactNode {
const { item } = props;

if (item.type === "link") {
    return (
      <div style={{ position: "relative", width: "100%" }}>
        {/* Floating circle */}
        <div
          style={{
            position: "absolute",
            left: 8,
            top: "50%",
            transform: "translateY(-50%)",
            width: 12,
            height: 12,
            borderRadius: "50%",
            border: "2px solid gray",
          }}
        />
        {/* Add left padding so text doesn't overlap the circle */}
        <div style={{ paddingLeft: 32 }}>
          <DocSidebarItem {...props} />
        </div>
      </div>
    );
  }

  return <DocSidebarItem {...props} />;
}