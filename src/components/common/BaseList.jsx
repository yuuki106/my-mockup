import { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Input, Box, Button } from "@mui/material";
import ChatBubbleOutlineSharpIcon from "@mui/icons-material/ChatBubbleOutlineSharp";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import FileUploadSharpIcon from "@mui/icons-material/FileUploadSharp";
import InfoOutlineSharpIcon from "@mui/icons-material/InfoOutlineSharp";
import { FileDownload } from "@mui/icons-material";

// ✅ 正しい読み込み方法（xlsx 0.19.0+）
import { read, utils } from "xlsx";

function BaseList({ expanded, onToggle, onFileLoaded }) {
  const [fileName, setFileName] = useState("選択されていません");

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);

    const reader = new FileReader();

    reader.onload = (evt) => {
      const data = evt.target.result;
      const workbook = read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const json = utils.sheet_to_json(sheet);
      console.log("読み込んだデータ:", json);

      if (onFileLoaded) {
        onFileLoaded(json); // ← 親に渡す
      }
    };

    reader.readAsBinaryString(file);
  };

  const handleUpload = () => {
    alert("アップロード処理は onFileLoaded により即時反映されます。");
  };

  return (
    <Accordion expanded={expanded} onChange={onToggle}>
      <AccordionSummary sx={{ borderBottom: "1px solid lightgrey" }}>
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
          <Typography sx={{ display: "flex", alignItems: "center", gap: "4px", fontWeight: "bold", fontSize: "24px" }}>
            <ChatBubbleOutlineSharpIcon />
            局リスト
          </Typography>
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>{expanded ? "−" : "+"}</span>
        </div>
      </AccordionSummary>

      <AccordionDetails sx={{ p: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ArrowForwardSharpIcon sx={{ fontSize: "12px" }} />
          <Box sx={{ fontSize: "12px" }}>
            <span style={{ color: "red" }}>「局リスト」</span> ファイルを選択してください（<span style={{ color: "red" }}>１個のファイル</span>）
          </Box>
        </Box>

        <Typography sx={{ fontSize: "12px", paddingLeft: "12px" }}>ファイル種別：pdf、xls、xlsx、xlsm、.doc、.docs</Typography>

        <Box sx={{ margin: "6px 0" }}>
          <Button
            color="primary"
            variant="contained"
            sx={{
              backgroundColor: "green",
              color: "#fff",
              fontSize: "12px",
              padding: "4px ",
              "&:hover": {
                backgroundColor: "darkgreen",
              },
            }}
          >
            <FileDownload sx={{ fontSize: "12px" }} />
            フォーマットDL
          </Button>
          <Input type="file" sx={{ fontSize: "12px", margin: "4px " }} onChange={handleFileChange} />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", fontSize: "14px" }}>
          <InfoOutlineSharpIcon sx={{ fontSize: "14px", marginRight: "4px" }} />
          Status Message：{fileName}
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
