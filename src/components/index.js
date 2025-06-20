"use client";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";

type Props = {
  summaryText?: string,
  summaryIcon?: React.ReactNode,
  children?: React.ReactNode,
};

export function NestedListItem({ summaryText, children, summaryIcon }: Props) {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick} sx={{ padding: 0 }}>
        <ListItemIcon sx={{ minWidth: 24, marginRight: 0 }}>{summaryIcon}</ListItemIcon>
        <ListItemText sx={{ marginLeft: 0, paddingLeft: 0 }} primary={summaryText} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children}
        </List>
      </Collapse>
    </>
  );
}
