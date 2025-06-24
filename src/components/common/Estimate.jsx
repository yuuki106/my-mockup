import { useEffect, useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Input, Box, Button, Grid, Stack } from "@mui/material";
import ChatBubbleOutlineSharpIcon from "@mui/icons-material/ChatBubbleOutlineSharp";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import FileUploadSharpIcon from "@mui/icons-material/FileUploadSharp";
import InfoOutlineSharpIcon from "@mui/icons-material/InfoOutlineSharp";
import { FileDownload } from "@mui/icons-material";

function BaseList({ expanded, onToggle }) {
  const [bases, setBases] = useState(null); // アップロードされたファイルを保持
  const [fileName, setFileName] = useState("選択されていません");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBases(file); // Fileオブジェクトをstateに保存
      setFileName(file.name);
    }
  };

  const handleUpload = () => {
    if (bases) {
      console.log("アップロード処理（仮）:", bases);
      // ここでAPIなどに送信する処理を書く
    } else {
      alert("ファイルを選択してください。");
    }
  };

  return (
    <Accordion expanded={expanded} onChange={onToggle}>
      <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" sx={{ borderBottom: "1px solid lightgrey" }}>
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
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
            <ChatBubbleOutlineSharpIcon />
            見積書
          </Typography>
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>{expanded ? "−" : "+"}</span>
        </div>
      </AccordionSummary>

      <AccordionDetails sx={{ p: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ArrowForwardSharpIcon sx={{ fontSize: "12px" }} />
          <Box sx={{ fontSize: "12px" }}>
            <span style={{ color: "red" }}>「見積書」</span>
            ファイルを選択してください（<span style={{ color: "red" }}>１個のファイル</span>）
          </Box>
        </Box>

        <Typography sx={{ fontSize: "12px", paddingLeft: "12px" }}>ファイル種別：pdf、xls、xlsx、xlsm、.doc、.docs</Typography>
        <Box sx={{ margin: "6px 0" }}>
          <Input type="file" sx={{ fontSize: "12px", margin: "4px " }} />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", fontSize: "14px" }}>
          <InfoOutlineSharpIcon sx={{ fontSize: "14px", marginRight: "4px" }} />
          Status Message：
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Button color="primary" variant="contained" sx={{ padding: "4px", fontSize: "12px" }} onClick={handleUpload}>
            <FileUploadSharpIcon sx={{ fontSize: "12px" }} />
            アップロード
          </Button>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default BaseList;
