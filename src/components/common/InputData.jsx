import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useState } from "react";

function InputData({ rows }) {
  const [expanded, setExpanded] = useState(true);
  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  const headers = [
    "着工日",
    "優先フラグ",
    "オーダーID",
    "発注金額",
    "発注種別",
    "決済ID",
    "基地局管理番号",
    "基地局名称（漢字）",
    "親子オーダー",
    "顧客検収月",
    "アラート",
  ];

  return (
    <Accordion expanded={expanded} onChange={handleToggle}>
      <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" sx={{ borderBottom: "1px solid lightgrey" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Typography
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontWeight: "bold",
              fontSize: "24px",
              lineHeight: "0",
            }}
          >
            #登録情報 - 入力内容
          </Typography>
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>{expanded ? "−" : "+"}</span>
        </div>
      </AccordionSummary>

      <AccordionDetails sx={{ p: 1 }}>
        <Table size="small">
          <TableHead sx={{ backgroundColor: "#E5E5E5" }}>
            <TableRow>
              {headers.map((header) => (
                <TableCell key={header}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, idx) => (
              <TableRow key={idx}>
                {headers.map((key) => (
                  <TableCell key={key}>{row[key]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </AccordionDetails>
    </Accordion>
  );
}

export default InputData;
