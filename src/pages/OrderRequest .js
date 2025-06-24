import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { Box, Checkbox, Button, Dialog, IconButton, DialogContent, DialogContentText, DialogTitle, Grid, Stack } from "@mui/material";
import TextInput from "../components/common/TextInput";
import SelectInput from "../components/common/SelectInput";
import DateInput from "../components/common/DateInput";
import PostalCodeSearch from "../components/common/PostalCodeSearch";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import FormControlLabel from "@mui/material/FormControlLabel";
import ChatBubbleOutlineSharpIcon from "@mui/icons-material/ChatBubbleOutlineSharp";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Estimate from "../components/common/Estimate";
import BaseList from "../components/common/BaseList";
import InputData from "../components/common/InputData";

function OrderRequest() {
  const sampleRows = [
    {
      着工日: "2025-06-01",
      優先フラグ: "高",
      オーダーID: "ORD123",
      発注金額: "¥1,000,000",
      発注種別: "通常",
      決済ID: "PAY001",
      基地局管理番号: "BS001",
      "基地局名称（漢字）": "東京タワー",
      親子オーダー: "親",
      顧客検収月: "2025年7月",
      アラート: "なし",
    },
  ];

  const [rows, setRows] = useState([]);
  const [activeButton, setActiveButton] = useState("left");

  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  const [expanded, setExpanded] = useState(true);
  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  const [baseList, setBaseList] = useState(true);
  const handleBaseListToggle = () => {
    setBaseList((prev) => !prev);
  };

  const [mor, setMor] = useState(true);
  const handleMorToggle = () => {
    setMor((prev) => !prev);
  };

  const [memo, setMemo] = useState(true);
  const handleMemoToggle = () => {
    setMemo((prev) => !prev);
  };

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [orderIdInput, setOrderIdInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    type: "",
    orderType: "",
    orderId: "",
    paymentId: "",
    startDay: "",
    beforePrice: "",
    beforeLimit: "",
  });

  const handleReflectData = () => {
    if (!orderIdInput) {
      setErrorMessage("オーダーIDを入力してください");
      setFormData({
        type: "",
        orderType: "",
        orderId: "",
        paymentId: "",
        startDay: "",
        beforePrice: "",
        beforeLimit: "",
      });
      return;
    }
    const data = dummyData[orderIdInput];
    if (data) {
      setFormData(data);
      setErrorMessage("");
      if (data.type === "包括") {
        setMulti(true);
      } else {
        setMulti(false);
      }
    } else {
      setErrorMessage("該当する発注IDのデータがありません");
      setFormData({
        type: "",
        orderType: "",
        orderId: "",
        paymentId: "",
        startDay: "",
        beforePrice: "",
        beforeLimit: "",
      });
    }
  };

  // 擬似データ
  const dummyData = {
    R000000001: {
      type: "個別",
      orderType: "種別1",
      orderId: "12345",
      paymentId: "pay-9876",
      startDay: "2025-07-01",
      beforePrice: "100000",
      beforeLimit: "2025-07-15",
    },
    R000000002: {
      type: "包括",
      orderType: "種別2",
      orderId: "67890",
      paymentId: "pay-4321",
      startDay: "2025-08-01",
      beforePrice: "200000",
      beforeLimit: "2025-08-15",
    },
  };

  const [selectedType, setSelectedType] = useState("");
  const [multi, setMulti] = useState(false);
  const handleMultiChange = (e) => {
    const value = e.target.value;
    setSelectedType(value);

    if (value === "2") {
      setMulti(true);
    } else {
      setMulti(false);
    }
  };

  useEffect(() => {
    console.log(rows);
  }, [rows]);
  useEffect(() => {
    setMulti(false);
    setFormData({
      type: "",
      orderType: "",
      orderId: "",
      paymentId: "",
      startDay: "",
      beforePrice: "",
      beforeLimit: "",
    });
    setErrorMessage("");
  }, [activeButton]);

  return (
    <Box sx={{ px: "1rem", py: "0.5rem" }}>
      <h1
        style={{
          margin: "0",
          padding: "0",
          fontSize: "30px",
        }}
      >
        発注依頼登録
      </h1>
      <Box backgroundColor="white" padding="6px" marginBottom="12px">
        <Box style={{ display: "flex", gap: "6px" }}>
          <button
            onClick={() => handleClick("left")}
            style={{
              display: "flex", // ← 横並び（アイコン＋テキスト）
              alignItems: "center", // ← 上下中央揃え！
              gap: "4px", // ← アイコンと文字の間隔
              backgroundColor: activeButton === "left" ? "#007bff" : "#e0e0e0",
              color: activeButton === "left" ? "white" : "black",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              padding: "6px 12px", // ← 少し余白入れると綺麗に
            }}
          >
            <FiberManualRecordIcon fontSize="small" style={{ color: "#5B1A8E" }} />
            新規
          </button>
          <button
            onClick={() => handleClick("right")}
            style={{
              display: "flex", // ← 横並び（アイコン＋テキスト）
              alignItems: "center", // ← 上下中央揃え！
              gap: "4px", // ← アイコンと文字の間隔
              backgroundColor: activeButton === "right" ? "#007bff" : "#e0e0e0",
              color: activeButton === "right" ? "white" : "black",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            <FiberManualRecordIcon fontSize="small" style={{ color: "#5B1A8E" }} />
            変更・取消
          </button>
        </Box>
      </Box>
      <Stack width="100%" direction="row" gap="12px">
        <Box>
          <Accordion expanded={expanded} onChange={handleToggle}>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                borderBottom: "1px solid lightgrey",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
                <Typography
                  sx={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "24px",
                    lineHeight: "0",
                  }}
                >
                  ＃発注依頼情報
                </Typography>
                <span style={{ fontWeight: "bold", fontSize: "18px" }}>{expanded ? "−" : "+"}</span>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "24px",
                  borderBottom: "1px solid lightgrey",
                  color: "#5B1A8E",
                  backgroundColor: "#EEE0F4",
                }}
              >
                依頼登録者情報 <span style={{ fontSize: "14px", fontWeight: "normal" }}>–依頼登録者情報が表示されます。</span>
              </Typography>
              <Stack direction="row" flexWrap="wrap" paddingLeft="16px">
                <TextInput label="依頼者_ユーザー名" id="nameInput" name="userName" />
                <TextInput label="依頼者_ SBENG_課" id="sbeng" name="sbeng" />
                <TextInput label="依頼者_メールアドレス" id="email" name="email" />
                <TextInput label="対応連絡先_ メールアドレス" id="email2" name="email" />
              </Stack>
              {activeButton === "left" ? (
                <>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "24px",
                      borderBottom: "1px solid lightgrey",
                      color: "#5B1A8E",
                      backgroundColor: "#EEE0F4",
                    }}
                  >
                    発注情報 <span style={{ fontSize: "14px", fontWeight: "normal" }}>–発注情報を入力してください。</span>
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" paddingLeft="16px">
                    <SelectInput
                      label="発注種別"
                      id="orderType"
                      name="orderType"
                      // value={form.orderType}
                      // onChange={handleChange}
                      options={[
                        { value: "type1", label: "種別1" },
                        { value: "type2", label: "種別2" },
                      ]}
                    />
                    <SelectInput
                      label="個別・包括"
                      id="type"
                      name="type"
                      value={selectedType}
                      onChange={handleMultiChange}
                      options={[
                        { value: "1", label: "個別" },
                        { value: "2", label: "包括" },
                      ]}
                    />
                    <SelectInput
                      label="優先フラグ"
                      id="flag"
                      name="flag"
                      // value={form.orderType}
                      // onChange={handleChange}
                      options={[
                        { value: "hight", label: "緊急" },
                        { value: "middle", label: "急ぎ" },
                        { value: "low", label: "通常" },
                      ]}
                    />
                    <Box sx={{ width: "50%" }}>
                      <Box sx={{ width: "100%" }}>
                        <span style={{ display: "block", marginBottom: "8px", fontWeight: "bold", color: "#5B1A8E", fontSize: "14px" }}>
                          ⚠️優先フラグ
                          <span style={{ display: "block", border: "1px solid grey", padding: "2px", color: "#5B1A8E", fontSize: "12px" }}>
                            緊急：着工【前日】・急ぎ：着工【3営業日前】・通常：その他
                          </span>
                        </span>
                      </Box>
                    </Box>
                    <TextInput label="決裁ID" id="paymentId" name="paymentId" />
                    <TextInput label="オーダーID" id="orderId" name="orderId" disabled={multi} />
                    <TextInput label="発注金額" id="price" name="price" />
                    <DateInput label="着工日" id="startDate" name="startDate" />
                  </Stack>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "24px",
                      borderBottom: "1px solid lightgrey",
                      color: "#5B1A8E",
                      backgroundColor: "#EEE0F4",
                    }}
                  >
                    納品先情報 <span style={{ fontSize: "14px", fontWeight: "normal" }}>–納品先情報を入力してください。</span>
                  </Typography>
                  <PostalCodeSearch></PostalCodeSearch>
                </>
              ) : (
                <>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "24px",
                      borderBottom: "1px solid lightgrey",
                      color: "#5B1A8E",
                      backgroundColor: "#EEE0F4",
                    }}
                  >
                    発注情報 <span style={{ fontSize: "14px", fontWeight: "normal" }}>–発注情報を入力してください。</span>
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" paddingLeft="16px">
                    <Box
                      sx={{
                        width: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <label
                        htmlFor="zip"
                        style={{
                          fontWeight: "bold",
                          width: "120px", // 必要に応じて調整
                          fontSize: "14px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        発注ID
                      </label>

                      {/* 右寄せ：marginLeft: auto */}
                      <Box sx={{ paddingTop: "8px", display: "flex", flexDirection: "column" }}>
                        <Box
                          sx={{
                            display: "flex",
                            marginLeft: "auto", // ← ここがキモ！
                            alignItems: "center",
                          }}
                        >
                          <input
                            // id="zip"
                            type="text"
                            onChange={(e) => setOrderIdInput(e.target.value)}
                            placeholder="発注IDを入力してください"
                            style={{
                              padding: "8px",
                              width: "100%",
                              boxSizing: "border-box",
                            }}
                          />
                          <IconButton
                            onClick={handleReflectData}
                            aria-label="search"
                            sx={{
                              backgroundColor: "#42a5f5",
                              color: "white",
                              borderRadius: "4px",
                              padding: "6px",
                              fontSize: "12px",
                              marginRight: "12px",
                              "&:hover": {
                                backgroundColor: "#1e88e5",
                              },
                              minWidth: "32px",
                              minHeight: "32px",
                            }}
                          >
                            データ反映
                          </IconButton>
                        </Box>
                        <Box sx={{ color: "red" }}>{errorMessage}</Box>
                      </Box>
                    </Box>
                    <TextInput label="個別・包括" id="type" name="type" value={formData.type} disabled={true} />
                    <TextInput label="発注種別" id="orderType" name="orderType" value={formData.orderType} disabled={true} />
                    <TextInput label="オーダーID" id="orderId" name="orderId" value={formData.orderId} disabled={true} />
                    <TextInput label="決裁ID" id="paymentId" name="paymentId" value={formData.paymentId} disabled={true} />
                    <TextInput label="着工日" id="startDay" name="startDay" value={formData.startDay} disabled={true} />
                    <TextInput label="変更前_金額" id="beforePrice" name="beforePrice" value={formData.beforePrice} disabled={true} />
                    <TextInput
                      label="変更後_金額"
                      id="afterPrice"
                      name="afterPrice"
                      onChange={(e) => setFormData({ ...formData, afterPrice: e.target.value })}
                    />
                    <TextInput label="変更前_納期" id="beforeLimit" name="beforeLimit" value={formData.beforeLimit} disabled={true} />
                    <DateInput
                      label="変更後_納期"
                      id="afterLimit"
                      name="afterLimit"
                      onChange={(e) => setFormData({ ...formData, afterLimit: e.target.value })}
                    />
                    <DateInput
                      label="覚書発行希望日"
                      id="oboegaki"
                      name="oboegaki"
                      onChange={(e) => setFormData({ ...formData, oboegaki: e.target.value })}
                    />
                    <TextInput
                      label="変更・取消理由"
                      id="reason"
                      name="reason"
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    />
                  </Stack>
                </>
              )}
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box sx={{ width: activeButton === "left" ? "80%" : "98%" }}>
          {multi ? (
            <BaseList expanded={mor} onToggle={handleMorToggle} onFileLoaded={setRows} />
          ) : (
            <Box backgroundColor="white" fontWeight="bold" padding="6px" fontSize="24px">
              局リスト不要
            </Box>
          )}

          <Estimate expanded={baseList} onToggle={handleBaseListToggle} />

          <Accordion expanded={memo} onChange={handleMemoToggle} sx={{}}>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                borderBottom: "1px solid lightgrey",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
                <Typography
                  style={{
                    display: "flex", // ← 横並び（アイコン＋テキスト）
                    alignItems: "center", // ← 上下中央揃え！
                    gap: "4px", // ← アイコンと文字の間隔
                    fontWeight: "bold",
                    fontSize: "24px",
                    lineHeight: "0",
                  }}
                >
                  <ChatBubbleOutlineSharpIcon></ChatBubbleOutlineSharpIcon>
                  備考
                </Typography>
                <span style={{ fontWeight: "bold", fontSize: "18px" }}>{expanded ? "−" : "+"}</span>
              </div>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                p: 0, // ← paddingを完全になくす
              }}
            >
              <Box sx={{ padding: "1rem" }}>
                <TextField
                  id="memo"
                  label="備考を入力してください"
                  multiline
                  rows={4} // 表示行数（必要に応じて変更）
                  variant="outlined"
                  fullWidth
                />
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Stack>
      {activeButton === "left" && (
        <Box sx={{ marginTop: "16px" }}>
          <InputData rows={rows}></InputData>
        </Box>
      )}

      <Box backgroundColor="white" py={2}>
        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
          <FormControlLabel
            control={<Checkbox checked={checked} onChange={handleChange} />}
            label={
              <span style={{ fontWeight: "bold", textAlign: "center" }}>上記の内容をご確認の上、 「発注依頼申請」ボタンをクリックしてください。</span>
            }
          />
          <Box display="flex" gap="12px">
            {activeButton === "left" ? (
              <>
                <Button sx={{ backgroundColor: "#FD8508", color: "white", fontWeight: "bold" }}>一時保存</Button>
                <Button sx={{ backgroundColor: "#2289B2", color: "white", fontWeight: "bold" }}>発注依頼申請</Button>
              </>
            ) : (
              <Button sx={{ backgroundColor: "#2289B2", color: "white", fontWeight: "bold" }}>変更発注依頼申請</Button>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default OrderRequest;
