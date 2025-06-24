import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Checkbox, Button, Dialog, IconButton, MenuItem, DialogContent, DialogContentText, DialogTitle, Grid, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import FormatListBulletedSharpIcon from "@mui/icons-material/FormatListBulletedSharp";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import FeedSharpIcon from "@mui/icons-material/FeedSharp";
import WysiwygSharpIcon from "@mui/icons-material/WysiwygSharp";
import ReplySharpIcon from "@mui/icons-material/ReplySharp";
import CreateSharpIcon from "@mui/icons-material/CreateSharp";
import ClearSharpIcon from "@mui/icons-material/ClearSharp";
import React from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, TableContainer } from "@mui/material";
import ScheduleSharpIcon from "@mui/icons-material/ScheduleSharp";
import { useNavigate } from "react-router-dom";

import ChatBubbleOutlineSharpIcon from "@mui/icons-material/ChatBubbleOutlineSharp";

const RequestDetail = () => {
  const navigate = useNavigate();
  const [baseList, setBaseList] = useState(true);
  const handleBaseListToggle = () => {
    setBaseList((prev) => !prev);
  };
  const location = useLocation();
  const [orderStatus, setOrderStatus] = useState("");

  const row = location.state?.row;
  useEffect(() => {
    setOrderStatus(row.orderStatus);
  }, []);
  const [expanded, setExpanded] = useState(true);
  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };
  const [mor, setMor] = useState(true);
  const handleMorToggle = () => {
    setMor((prev) => !prev);
  };
  const cellStyle = {
    padding: "6px",
    fontWeight: "bold",
    border: "1px solid lightgrey",
    textAlign: "center",
    fontSize: "12px",
  };
  const headers = [
    "発注ID",
    "仕入先検収番号",
    "発注金額",
    "オーダーID",
    "備考",
    "発注種別",
    "基地局管理番号",
    "基地局名称(漢字)",
    "親子オーダー",
    "顧客検収月",
    "アラート",
  ];

  const headers2 = ["No.", "決裁依頼番号", "履歴区分", "変更内容", "履歴登録日時", "履歴登録者"];
  const rows2 = [
    {
      "No.": "1",
      決裁依頼番号: "XXXXXXXXX",
      履歴区分: "詳細情報修正",
      変更内容: `売上「10,000」⇒「20,000」
原価「5,000」⇒「1,000」
納期「2025/5/1」⇒「2025/6/1」`,
      履歴登録日時: "2025/06/20",
      履歴登録者: "SBENG太郎",
    },
  ];

  const rows = [
    {
      発注ID: "E000001",
      仕入先検収番号: "Pa000001",
      発注金額: "¥100",
      オーダーID: "R000001",
      備考: "",
      発注種別: "工事",
      基地局管理番号: "TU-00001",
      "基地局名称(漢字)": "TEST基地局1",
      親子オーダー: "",
      顧客検収月: "",
      アラート: "",
    },
    {
      発注ID: "E000001",
      仕入先検収番号: "Pa000001",
      発注金額: "¥100",
      オーダーID: "R000002",
      備考: "",
      発注種別: "工事",
      基地局管理番号: "TU-00002",
      "基地局名称(漢字)": "TEST基地局2",
      親子オーダー: "",
      顧客検収月: "",
      アラート: "",
    },
    {
      発注ID: "E000001",
      仕入先検収番号: "Pa000001",
      発注金額: "¥100",
      オーダーID: "R000003",
      備考: "",
      発注種別: "工事",
      基地局管理番号: "TU-00003",
      "基地局名称(漢字)": "TEST基地局3",
      親子オーダー: "",
      顧客検収月: "",
      アラート: "",
    },
  ];

  const headerStyle = {
    ...cellStyle,
    backgroundColor: "#CCFFFF",
  };

  if (!row) {
    return <div>データがありません</div>;
  }

  return (
    <>
      <Box sx={{ padding: "16px", backgroundColor: "white" }}>
        <Stack>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex" }}>
              <WysiwygSharpIcon sx={{ fontSize: "40px" }}></WysiwygSharpIcon>
              <h1
                style={{
                  margin: "0",
                  padding: "0",
                  fontSize: "30px",
                }}
              >
                発注依頼詳細
              </h1>
            </Box>
            <Box>
              <Button sx={{ backgroundColor: "orange", padding: "4px 8px" }} onClick={() => navigate("/order-request-list")}>
                <ReplySharpIcon sx={{ color: "white", marginRight: "4px" }} />
                <span style={{ color: "white", fontWeight: "bold" }}>前へ戻る</span>
              </Button>
            </Box>
          </Box>
          <Stack flexDirection="row" gap="6px" justifyContent="flex-end">
            <Box>
              <Button sx={{ backgroundColor: "#FFBF00", padding: "4px 8px" }} onClick={() => setOrderStatus("対応開始")}>
                <span style={{ color: "white", fontWeight: "bold" }}>対応開始</span>
              </Button>
            </Box>
            <Box>
              <Button sx={{ backgroundColor: "green", padding: "4px 8px" }} onClick={() => setOrderStatus("下書完了")}>
                <span style={{ color: "white", fontWeight: "bold" }}>下書完了</span>
              </Button>
            </Box>
            <Box>
              <Button sx={{ backgroundColor: "#3299FF", padding: "4px 8px" }} onClick={() => setOrderStatus("発注依頼")}>
                <span style={{ color: "white", fontWeight: "bold" }}>発注依頼</span>
              </Button>
            </Box>
            <Box>
              <Button sx={{ backgroundColor: "purple", padding: "4px 8px" }} onClick={() => setOrderStatus("発注完了")}>
                <span style={{ color: "white", fontWeight: "bold" }}>発注完了</span>
              </Button>
            </Box>
          </Stack>
        </Stack>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            spacing={1}
            wrap="nowrap" // ここがポイント！
            sx={{ width: "100%" }}
          >
            {/* 左側（70%） */}
            <Grid item sx={{ flexGrow: 6, flexBasis: 0 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: "1px solid grey",
                    width: "100%",
                  }}
                >
                  <WysiwygSharpIcon sx={{ fontSize: "36px", marginRight: 1 }} />
                  <h1 style={{ margin: "16px 0", padding: 0, fontSize: "24px", width: "100%" }}>詳細依頼</h1>
                </Box>
              </Box>
              <Box sx={{ display: "flex", marginTop: "16px" }}>
                <Typography sx={{ flex: 3, ...headerStyle }}>発注依頼番号</Typography>
                <Typography sx={{ flex: 7, ...cellStyle }}>R1111100</Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Typography sx={{ flex: 3, ...headerStyle }}>発注依頼ステータス</Typography>
                <Typography
                  sx={{
                    flex: 7,
                    ...cellStyle,
                  }}
                >
                  <Box
                    sx={{
                      color: "white",
                      width: "100px",
                      borderRadius: "6px",
                      padding: "4px 24px",

                      backgroundColor:
                        orderStatus === "作成中"
                          ? "#add8e6" // 水色
                          : orderStatus === "申請中"
                          ? "#ffa500" // オレンジ
                          : orderStatus === "対応開始" || orderStatus === "対応中"
                          ? "#FFBF00" // 黄色
                          : orderStatus === "下書完了"
                          ? "green"
                          : orderStatus === "発注依頼"
                          ? "blue"
                          : orderStatus === "発注完了"
                          ? "purple"
                          : "gray",
                    }}
                  >
                    {" "}
                    {orderStatus}
                  </Box>
                </Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Typography sx={{ flex: 1, ...headerStyle }}>優先フラグ</Typography>
                <Typography sx={{ flex: 1, ...cellStyle }}>{row.flag}</Typography>
                <Typography sx={{ flex: 1, ...headerStyle }}>SBENG_課</Typography>
                <Typography sx={{ flex: 1, ...cellStyle }}>{row.sbeng}</Typography>
                <Typography sx={{ flex: 1, ...headerStyle }}>オーダーID</Typography>
                <Typography sx={{ flex: 1, ...cellStyle }}>{row.orderId}</Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Typography sx={{ flex: 1, ...headerStyle }}>発注種別</Typography>
                <Typography sx={{ flex: 1, ...cellStyle }}>{row.flag}</Typography>
                <Typography sx={{ flex: 1, ...headerStyle }}>発注金額</Typography>
                <Typography sx={{ flex: 1, ...cellStyle }}>{row.sbeng}</Typography>
                <Typography sx={{ flex: 1, ...headerStyle }}>契約種別</Typography>
                <Typography sx={{ flex: 1, ...cellStyle }}>{row.orderId}</Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Typography sx={{ flex: 1, ...headerStyle }}>サイトID</Typography>
                <Typography sx={{ flex: 1, ...cellStyle }}>{row.flag}</Typography>
                <Typography sx={{ flex: 1, ...headerStyle }}>基地局管理番号</Typography>
                <Typography sx={{ flex: 1, ...cellStyle }}>{row.sbeng}</Typography>
                <Typography sx={{ flex: 1, ...headerStyle }}>決裁ID</Typography>
                <Typography sx={{ flex: 1, ...cellStyle }}>{row.orderId}</Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Typography sx={{ flex: 3, ...headerStyle }}>基地局名称(漢字)</Typography>
                <Typography sx={{ flex: 7, ...cellStyle }}>R1111100</Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Typography sx={{ flex: 1, ...headerStyle }}>着工日</Typography>
                <Typography sx={{ flex: 1, ...cellStyle }}>{row.flag}</Typography>
                <Typography sx={{ flex: 1, ...headerStyle }}>覚書発行希望日</Typography>
                <Typography sx={{ flex: 1, ...cellStyle }}>{row.sbeng}</Typography>
                <Typography sx={{ flex: 1, ...headerStyle }}>発注金額</Typography>
                <Typography sx={{ flex: 1, ...cellStyle }}>{row.orderId}</Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Typography sx={{ flex: 2, ...headerStyle }}>発注ID</Typography>
                <Typography sx={{ flex: 2, ...cellStyle }}>{row.flag}</Typography>
                <Typography sx={{ flex: 2, ...headerStyle }}>Workrevo稟議番号</Typography>
                <Typography sx={{ flex: 2, ...cellStyle }}>{row.sbeng}</Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Typography sx={{ flex: 3, ...headerStyle }}>対応連絡先</Typography>
                <Typography sx={{ flex: 7, ...cellStyle }}>R1111100</Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Typography sx={{ flex: 3, ...headerStyle }}>発注依頼備考</Typography>
                <Typography sx={{ flex: 7, ...cellStyle }}>R1111100</Typography>
              </Box>

              <Box sx={{ display: "flex", marginTop: "8px" }}>
                <Typography sx={{ flex: 3, ...headerStyle }}>納品先_住所</Typography>
                <Typography sx={{ flex: 7, ...cellStyle }}>R1111100</Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Typography sx={{ flex: 2, ...headerStyle }}>納品先_担当者</Typography>
                <Typography sx={{ flex: 2, ...cellStyle }}>{row.flag}</Typography>
                <Typography sx={{ flex: 2, ...headerStyle }}>納品日</Typography>
                <Typography sx={{ flex: 2, ...cellStyle }}>{row.sbeng}</Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Typography sx={{ flex: 3, ...headerStyle }}>担当者コメント</Typography>
                <Typography sx={{ flex: 7, ...cellStyle }}>R1111100</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "6px", justifyContent: "flex-end", margin: "16px 0" }}>
                <Box sx={{ display: "flex", alignItems: "center", marginRight: "16px" }}>
                  <Button sx={{ backgroundColor: "#65B2FF", padding: "4px 8px", color: "white", fontWeight: "bold" }}>
                    {" "}
                    <CreateSharpIcon></CreateSharpIcon>
                    修正
                  </Button>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Button sx={{ backgroundColor: "#FF3F00", padding: "4px 8px", color: "white", fontWeight: "bold" }}>
                    {" "}
                    <ClearSharpIcon></ClearSharpIcon>
                    レコード削除
                  </Button>
                </Box>
              </Box>
              <Box sx={{ border: "1px solid lightgrey", borderRadius: "10px" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <WysiwygSharpIcon sx={{ fontSize: "36px", marginRight: 1 }} />
                    <h1 style={{ margin: "16px 0", padding: 0, fontSize: "24px", width: "100%" }}>差戻登録</h1>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", margin: "8px 0", padding: "0" }}>
                  <Typography sx={{ flex: 3, ...headerStyle }}>差戻理由</Typography>
                  <Typography sx={{ flex: 7, ...cellStyle, padding: "0" }}>
                    <TextField
                      variant="outlined" // 他に "filled", "standard" もあり
                      size="small" // small / medium
                      fullWidth // 親コンテナの幅に合わせる
                      disabled
                    />
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "6px", justifyContent: "flex-end", marginRight: "16px" }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Button sx={{ backgroundColor: "#FF3F00", padding: "4px 60px", color: "white", fontWeight: "bold" }}> 差戻</Button>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Button sx={{ backgroundColor: "#65B2FF", padding: "4px 60px", color: "white", fontWeight: "bold" }}> 修正完了</Button>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ border: "1px solid lightgrey", borderRadius: "10px", marginTop: "16px" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      borderBottom: "1px solid grey",
                      width: "100%",
                    }}
                  >
                    <WysiwygSharpIcon sx={{ fontSize: "36px", marginRight: 1 }} />
                    <h1 style={{ margin: "16px 0", padding: 0, fontSize: "24px", width: "100%" }}>変更取消理由</h1>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", margin: "8px 0" }}>
                  <Typography sx={{ flex: 3, ...headerStyle }}>変更依頼理由</Typography>
                  <Typography sx={{ flex: 7, ...cellStyle }}></Typography>
                </Box>
              </Box>

              <Box sx={{ border: "1px solid lightgrey", borderRadius: "10px", marginTop: "16px" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      borderBottom: "1px solid grey",
                      width: "100%",
                    }}
                  >
                    <WysiwygSharpIcon sx={{ fontSize: "36px", marginRight: 1 }} />
                    <h1 style={{ margin: "16px 0", padding: 0, fontSize: "24px", width: "100%" }}>キャンセル登録</h1>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", margin: "8px 0" }}>
                  <Typography sx={{ flex: 3, ...headerStyle }}>キャンセル理由</Typography>
                  <Typography sx={{ flex: 7, ...cellStyle }}></Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "6px", justifyContent: "flex-end", margin: "8px 0" }}>
                  <Box sx={{ display: "flex", alignItems: "center", marginRight: "16px" }}>
                    <Button sx={{ backgroundColor: "black", padding: "4px 60px", color: "white", fontWeight: "bold" }}>キャンセル</Button>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* 右側（30%） */}
            <Grid item sx={{ flexGrow: 4, flexBasis: 0 }}>
              <Accordion expanded={expanded} onChange={handleToggle}>
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{
                    borderBottom: "1px solid lightgrey",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
                    <Box display="flex" alignItems="center">
                      <WysiwygSharpIcon sx={{ fontSize: "36px" }}></WysiwygSharpIcon>
                      <Typography
                        sx={{
                          color: "black",
                          fontWeight: "bold",
                          fontSize: "24px",
                          lineHeight: "0",
                        }}
                      >
                        登録更新情報
                      </Typography>
                    </Box>

                    <span style={{ fontWeight: "bold", fontSize: "18px" }}>{expanded ? "−" : "+"}</span>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Box sx={{ display: "flex" }}>
                    <Typography sx={{ flex: 2, ...headerStyle }}>登録日時</Typography>
                    <Typography sx={{ flex: 2, ...cellStyle }}>　2000/01/01　00:00:00</Typography>
                    <Typography sx={{ flex: 2, ...headerStyle }}>登録者</Typography>
                    <Typography sx={{ flex: 2, ...cellStyle }}>SBENG 太郎</Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography sx={{ flex: 3, ...headerStyle }}>登録者_SBENG課</Typography>
                    <Typography sx={{ flex: 7, ...cellStyle }}>R1111100</Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography sx={{ flex: 2, ...headerStyle }}>対応開始日時</Typography>
                    <Typography sx={{ flex: 2, ...cellStyle }}>2000/01/01　00:00:00</Typography>
                    <Typography sx={{ flex: 2, ...headerStyle }}>対応開始者</Typography>
                    <Typography sx={{ flex: 2, ...cellStyle }}>SBENG 太郎</Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography sx={{ flex: 2, ...headerStyle }}>対応完了日時</Typography>
                    <Typography sx={{ flex: 2, ...cellStyle }}>2000/01/01　00:00:00</Typography>
                    <Typography sx={{ flex: 2, ...headerStyle }}>対応完了者</Typography>
                    <Typography sx={{ flex: 2, ...cellStyle }}>SBENG 太郎</Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography sx={{ flex: 2, ...headerStyle }}>承認待ち日時</Typography>
                    <Typography sx={{ flex: 2, ...cellStyle }}>2000/01/01　00:00:00</Typography>
                    <Typography sx={{ flex: 2, ...headerStyle }}>承認依頼者</Typography>
                    <Typography sx={{ flex: 2, ...cellStyle }}>SBENG 太郎</Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography sx={{ flex: 2, ...headerStyle }}>発注完了日時</Typography>
                    <Typography sx={{ flex: 2, ...cellStyle }}>2000/01/01　00:00:00</Typography>
                    <Typography sx={{ flex: 2, ...headerStyle }}>発注完了者</Typography>
                    <Typography sx={{ flex: 2, ...cellStyle }}>SBENG 太郎</Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography sx={{ flex: 2, ...headerStyle }}>差戻登録日時</Typography>
                    <Typography sx={{ flex: 2, ...cellStyle }}></Typography>
                    <Typography sx={{ flex: 2, ...headerStyle }}>差戻登録者</Typography>
                    <Typography sx={{ flex: 2, ...cellStyle }}></Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography sx={{ flex: 2, ...headerStyle }}>修正完了日時</Typography>
                    <Typography sx={{ flex: 2, ...cellStyle }}></Typography>
                    <Typography sx={{ flex: 2, ...headerStyle }}>修正完了者</Typography>
                    <Typography sx={{ flex: 2, ...cellStyle }}></Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography sx={{ flex: 2, ...headerStyle }}>変更発注完了日時</Typography>
                    <Typography sx={{ flex: 2, ...cellStyle }}></Typography>
                    <Typography sx={{ flex: 2, ...headerStyle }}>変更発注完了者</Typography>
                    <Typography sx={{ flex: 2, ...cellStyle }}></Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography sx={{ flex: 2, ...headerStyle }}>キャンセル日時</Typography>
                    <Typography sx={{ flex: 2, ...cellStyle }}></Typography>
                    <Typography sx={{ flex: 2, ...headerStyle }}>キャンセル者</Typography>
                    <Typography sx={{ flex: 2, ...cellStyle }}></Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography sx={{ flex: 2, ...headerStyle }}>更新日時</Typography>
                    <Typography sx={{ flex: 2, ...cellStyle }}>{row.flag}</Typography>
                    <Typography sx={{ flex: 2, ...headerStyle }}>更新者</Typography>
                    <Typography sx={{ flex: 2, ...cellStyle }}>{row.sbeng}</Typography>
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={mor} onChange={handleMorToggle} sx={{}}>
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
                      見積書
                    </Typography>
                    <span style={{ fontWeight: "bold", fontSize: "18px" }}>{expanded ? "−" : "+"}</span>
                  </div>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    p: 0, // ← paddingを完全になくす
                  }}
                >
                  <Box
                    sx={{
                      backgroundImage: 'url("/images/mitumori.png")',
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "top center", // 画像の位置を上中央に
                      backgroundSize: "contain", // 縦横比を保ちつつ画像全体を表示
                      // width: "100vw",
                      height: "15vh",
                    }}
                  ></Box>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={baseList} onChange={handleBaseListToggle}>
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
                      局リスト
                    </Typography>
                    <span style={{ fontWeight: "bold", fontSize: "18px" }}>{expanded ? "−" : "+"}</span>
                  </div>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    p: 0, // ← paddingを完全になくす
                  }}
                >
                  <Box
                    sx={{
                      backgroundImage: 'url("/images/baseList.png")',
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "top center", // 画像の位置を上中央に
                      backgroundSize: "contain", // 縦横比を保ちつつ画像全体を表示
                      // width: "100vw",
                      height: "15vh",
                    }}
                  ></Box>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
          <Box sx={{ border: "1px solid lightgrey", borderRadius: "10px", marginTop: "16px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "1px solid grey",
                  width: "100%",
                }}
              >
                <WysiwygSharpIcon sx={{ fontSize: "36px", marginRight: 1 }} />
                <h1 style={{ margin: "16px 0", padding: 0, fontSize: "24px", width: "100%" }}>局リスト一覧</h1>
                <Box sx={{ display: "flex", gap: "6px", justifyContent: "flex-end", marginRight: "16px" }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Button sx={{ backgroundColor: "#65B2FF", color: "white", fontWeight: "bold", width: "100px" }}>
                      {" "}
                      <CreateSharpIcon></CreateSharpIcon>
                      修正
                    </Button>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Button sx={{ backgroundColor: "green", color: "white", fontWeight: "bold", width: "200px" }}>ダウンロード</Button>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: "flex", gap: "6px", justifyContent: "flex-end", margin: "8px 0" }}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead sx={{ backgroundColor: "#e3f2fd" }}>
                    <TableRow>
                      {headers.map((header) => (
                        <TableCell key={header} sx={{ fontWeight: "bold", padding: "6px", textAlign: "center" }}>
                          {header}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, idx) => (
                      <TableRow key={idx}>
                        {headers.map((key) => (
                          <TableCell key={key} sx={{ padding: "6px", textAlign: "center" }}>
                            {row[key] || "-"}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>

          <Box sx={{ border: "1px solid lightgrey", borderRadius: "10px", marginTop: "16px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "1px solid grey",
                  width: "100%",
                }}
              >
                <ScheduleSharpIcon sx={{ fontSize: "36px", marginRight: 1 }} />
                <h1 style={{ margin: "16px 0", padding: 0, fontSize: "24px", width: "100%" }}>変更履歴一覧</h1>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "6px", justifyContent: "flex-end", margin: "8px 0" }}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead sx={{ backgroundColor: "#e3f2fd" }}>
                    <TableRow>
                      {headers2.map((header) => (
                        <TableCell key={header} sx={{ fontWeight: "bold", padding: "6px", textAlign: "center" }}>
                          {header}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows2.map((row, rowIndex) => (
                      <TableRow key={rowIndex}>
                        {headers2.map((header) => (
                          <TableCell
                            key={header}
                            sx={{
                              padding: "6px",
                              textAlign: "center",
                              whiteSpace: header === "変更内容" ? "pre-line" : "normal",
                            }}
                          >
                            {row[header] || "-"}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default RequestDetail;
