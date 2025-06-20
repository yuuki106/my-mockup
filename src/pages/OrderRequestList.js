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
import { useNavigate } from "react-router-dom";

function OrderRequestList() {
  const navigate = useNavigate();

  const [expanded, setExpanded] = useState(true);
  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };
  const data = [
    {
      id: 1,
      number: "検討中",
      orderStatus: "作成中",
      flag: "通常",
      sbeng: "関東エリア建設G",
      orderId: "R000000001",
      paymentId: "E056401",
      requestId: "R092461",
      responder: "",
      completeDay: "",
    },
    {
      id: 2,
      number: "検討中",
      orderStatus: "申請中",
      flag: "通常",
      sbeng: "関東エリア建設G",
      orderId: "R000000002",
      paymentId: "E056402",
      requestId: "R092461",
      responder: "",
      completeDay: "",
    },
    {
      id: 3,
      number: "検討中",
      orderStatus: "対応中",
      flag: "通常",
      sbeng: "関東エリア建設G",
      orderId: "R000000003",
      paymentId: "E056403",
      requestId: "R092461",
      responder: "SBENG太郎",
      completeDay: "2025/01/01",
    },
    {
      id: 4,
      number: "検討中",
      orderStatus: "対応中",
      flag: "通常",
      sbeng: "関東エリア建設G",
      orderId: "R000000003",
      paymentId: "E056403",
      requestId: "R092461",
      responder: "SBENG太郎",
      completeDay: "2025/01/01",
    },
    {
      id: 5,
      number: "検討中",
      orderStatus: "下書完了",
      flag: "急ぎ",
      sbeng: "関東エリア建設G",
      orderId: "R000000005",
      paymentId: "E056405",
      requestId: "R092465",
      responder: "SBENG太郎",
      completeDay: "2025/01/01",
    },
    {
      id: 6,
      number: "検討中",
      orderStatus: "発注依頼中",
      flag: "通常",
      sbeng: "関東エリア建設G",
      orderId: "R000000006",
      paymentId: "E056406",
      requestId: "R092466",
      responder: "SBENG太郎",
      completeDay: "2025/01/01",
    },
    {
      id: 7,
      number: "検討中",
      orderStatus: "発注完了",
      flag: "通常",
      sbeng: "関東エリア建設G",
      orderId: "R000000007",
      paymentId: "E056407",
      requestId: "R092467",
      responder: "SBENG太郎",
      completeDay: "2025/01/01",
    },
  ];

  return (
    <>
      <Box sx={{ padding: "16px" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "6px", backgroundColor: "white" }}>
          <FormatListBulletedSharpIcon sx={{ fontSize: "40px" }}></FormatListBulletedSharpIcon>
          <h1
            style={{
              margin: "0",
              padding: "0",
              fontSize: "30px",
            }}
          >
            発注依頼一覧
          </h1>
        </Box>
        <Box>
          <Accordion expanded={expanded} onChange={handleToggle}>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                borderBottom: "1px solid lightgrey",
              }}
            >
              <Box style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <SearchSharpIcon></SearchSharpIcon>
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: "16px",
                      lineHeight: "0",
                    }}
                  >
                    検索 - search
                  </Typography>
                </Box>
                <span style={{ fontWeight: "bold", fontSize: "18px" }}>{expanded ? "−" : "+"}</span>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Stack>
                  <Typography sx={{ backgroundColor: "lightblue", textAlign: "center", padding: "6px 12px" }}>依頼ステータス</Typography>
                  <FormControlLabel
                    sx={{ height: "24px" }}
                    control={<Checkbox size="small" />}
                    label={<span style={{ fontWeight: "bold", textAlign: "center" }}>Check ALL</span>}
                  />
                  <FormControlLabel
                    sx={{ height: "24px" }}
                    control={<Checkbox size="small" />}
                    label={<span style={{ fontWeight: "bold", textAlign: "center" }}>作成中</span>}
                  />
                  <FormControlLabel
                    sx={{ height: "24px" }}
                    control={<Checkbox size="small" />}
                    label={<span style={{ fontWeight: "bold", textAlign: "center" }}>申請中</span>}
                  />
                  <FormControlLabel
                    sx={{ height: "24px" }}
                    control={<Checkbox size="small" />}
                    label={<span style={{ fontWeight: "bold", textAlign: "center" }}>対応中</span>}
                  />
                  <FormControlLabel
                    sx={{ height: "24px" }}
                    control={<Checkbox size="small" />}
                    label={<span style={{ fontWeight: "bold", textAlign: "center" }}>下書完了</span>}
                  />
                  <FormControlLabel
                    sx={{ height: "24px" }}
                    control={<Checkbox size="small" />}
                    label={<span style={{ fontWeight: "bold", textAlign: "center" }}>発注依頼中</span>}
                  />
                  <FormControlLabel
                    sx={{ height: "24px" }}
                    control={<Checkbox size="small" />}
                    label={<span style={{ fontWeight: "bold", textAlign: "center" }}>発注完了</span>}
                  />
                  <FormControlLabel
                    sx={{ height: "24px" }}
                    control={<Checkbox size="small" />}
                    label={<span style={{ fontWeight: "bold", textAlign: "center" }}>キャンセル</span>}
                  />
                </Stack>
                <Stack spacing={1}>
                  <Stack flexDirection="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="body2" fontWeight="bold">
                      発注依頼番号
                    </Typography>
                    <TextField
                      variant="outlined"
                      size="small"
                      sx={{
                        "& .MuiInputBase-root": {
                          height: 28, // ← 入力欄全体の高さ
                          fontSize: "0.75rem", // ← テキストのサイズ
                        },
                        "& input": {
                          padding: "4px 8px", // ← テキストの上下左右の余白
                        },
                        marginLeft: "16px",
                      }}
                    />
                  </Stack>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="body2" fontWeight="bold">
                      SBENG_課
                    </Typography>
                    <TextField
                      select
                      variant="outlined"
                      // size="small"
                      sx={{
                        "& .MuiInputBase-root": {
                          height: 28,
                          fontSize: "0.75rem",
                        },
                        "& .MuiSelect-select": {
                          padding: "4px 8px",
                        },
                        marginLeft: "16px",
                        minWidth: "140px", // ← 必要に応じて幅を指定
                      }}
                      defaultValue=""
                    >
                      <MenuItem value="">
                        <em>選択してください</em>
                      </MenuItem>
                      <MenuItem value="a">A課</MenuItem>
                      <MenuItem value="b">B課</MenuItem>
                      <MenuItem value="c">C課</MenuItem>
                    </TextField>
                  </Box>
                  <Stack flexDirection="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="body2" fontWeight="bold">
                      オーダーID
                    </Typography>
                    <TextField
                      variant="outlined"
                      size="small"
                      sx={{
                        "& .MuiInputBase-root": {
                          height: 28, // ← 入力欄全体の高さ
                          fontSize: "0.75rem", // ← テキストのサイズ
                        },
                        "& input": {
                          padding: "4px 8px", // ← テキストの上下左右の余白
                        },
                        marginLeft: "16px",
                      }}
                    />
                  </Stack>

                  <Stack flexDirection="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="body2" fontWeight="bold">
                      決済ID
                    </Typography>
                    <TextField
                      variant="outlined"
                      size="small"
                      sx={{
                        "& .MuiInputBase-root": {
                          height: 28, // ← 入力欄全体の高さ
                          fontSize: "0.75rem", // ← テキストのサイズ
                        },
                        "& input": {
                          padding: "4px 8px", // ← テキストの上下左右の余白
                        },
                        marginLeft: "16px",
                      }}
                    />
                  </Stack>
                  <Stack flexDirection="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="body2" fontWeight="bold">
                      発注ID
                    </Typography>
                    <TextField
                      variant="outlined"
                      size="small"
                      sx={{
                        "& .MuiInputBase-root": {
                          height: 28, // ← 入力欄全体の高さ
                          fontSize: "0.75rem", // ← テキストのサイズ
                        },
                        "& input": {
                          padding: "4px 8px", // ← テキストの上下左右の余白
                        },
                        marginLeft: "16px",
                      }}
                    />
                  </Stack>
                  <Stack flexDirection="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="body2" fontWeight="bold">
                      対応者
                    </Typography>
                    <TextField
                      variant="outlined"
                      size="small"
                      sx={{
                        "& .MuiInputBase-root": {
                          height: 28, // ← 入力欄全体の高さ
                          fontSize: "0.75rem", // ← テキストのサイズ
                        },
                        "& input": {
                          padding: "4px 8px", // ← テキストの上下左右の余白
                        },
                        marginLeft: "16px",
                      }}
                    />
                  </Stack>
                </Stack>
                <Stack spacing={1}>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2" fontWeight="bold">
                      申請日
                    </Typography>
                    <Box>
                      <TextField
                        type="date"
                        variant="outlined"
                        size="small"
                        sx={{
                          "& .MuiInputBase-root": {
                            height: 28, // ← 入力欄全体の高さ
                            fontSize: "0.75rem", // ← テキストのサイズ
                          },
                          "& input": {
                            padding: "4px 8px", // ← テキストの上下左右の余白
                          },
                          marginLeft: "16px",
                          width: "150px",
                        }}
                      />
                      <span style={{ fontWeight: "bold", margin: "0 12px" }}>~</span>
                      <TextField
                        type="date"
                        variant="outlined"
                        size="small"
                        sx={{
                          "& .MuiInputBase-root": {
                            height: 28, // ← 入力欄全体の高さ
                            fontSize: "0.75rem", // ← テキストのサイズ
                          },
                          "& input": {
                            padding: "4px 8px", // ← テキストの上下左右の余白
                            width: "150px",
                          },
                        }}
                      />
                    </Box>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2" fontWeight="bold">
                      対応開始日
                    </Typography>
                    <Box>
                      <TextField
                        type="date"
                        variant="outlined"
                        size="small"
                        sx={{
                          "& .MuiInputBase-root": {
                            height: 28, // ← 入力欄全体の高さ
                            fontSize: "0.75rem", // ← テキストのサイズ
                          },
                          "& input": {
                            padding: "4px 8px", // ← テキストの上下左右の余白
                          },
                          marginLeft: "16px",
                          width: "150px",
                        }}
                      />
                      <span style={{ fontWeight: "bold", margin: "0 12px" }}>~</span>
                      <TextField
                        type="date"
                        variant="outlined"
                        size="small"
                        sx={{
                          "& .MuiInputBase-root": {
                            height: 28, // ← 入力欄全体の高さ
                            fontSize: "0.75rem", // ← テキストのサイズ
                          },
                          "& input": {
                            padding: "4px 8px", // ← テキストの上下左右の余白
                            width: "150px",
                          },
                        }}
                      />
                    </Box>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2" fontWeight="bold">
                      下書完了日
                    </Typography>
                    <Box>
                      <TextField
                        type="date"
                        variant="outlined"
                        size="small"
                        sx={{
                          "& .MuiInputBase-root": {
                            height: 28, // ← 入力欄全体の高さ
                            fontSize: "0.75rem", // ← テキストのサイズ
                          },
                          "& input": {
                            padding: "4px 8px", // ← テキストの上下左右の余白
                          },
                          marginLeft: "16px",
                          width: "150px",
                        }}
                      />
                      <span style={{ fontWeight: "bold", margin: "0 12px" }}>~</span>
                      <TextField
                        type="date"
                        variant="outlined"
                        size="small"
                        sx={{
                          "& .MuiInputBase-root": {
                            height: 28, // ← 入力欄全体の高さ
                            fontSize: "0.75rem", // ← テキストのサイズ
                          },
                          "& input": {
                            padding: "4px 8px", // ← テキストの上下左右の余白
                            width: "150px",
                          },
                        }}
                      />
                    </Box>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2" fontWeight="bold">
                      発注依頼日
                    </Typography>
                    <Box>
                      <TextField
                        type="date"
                        variant="outlined"
                        size="small"
                        sx={{
                          "& .MuiInputBase-root": {
                            height: 28, // ← 入力欄全体の高さ
                            fontSize: "0.75rem", // ← テキストのサイズ
                          },
                          "& input": {
                            padding: "4px 8px", // ← テキストの上下左右の余白
                          },
                          marginLeft: "16px",
                          width: "150px",
                        }}
                      />
                      <span style={{ fontWeight: "bold", margin: "0 12px" }}>~</span>
                      <TextField
                        type="date"
                        variant="outlined"
                        size="small"
                        sx={{
                          "& .MuiInputBase-root": {
                            height: 28, // ← 入力欄全体の高さ
                            fontSize: "0.75rem", // ← テキストのサイズ
                          },
                          "& input": {
                            padding: "4px 8px", // ← テキストの上下左右の余白
                            width: "150px",
                          },
                        }}
                      />
                    </Box>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2" fontWeight="bold">
                      発注完了日
                    </Typography>
                    <Box>
                      <TextField
                        type="date"
                        variant="outlined"
                        size="small"
                        sx={{
                          "& .MuiInputBase-root": {
                            height: 28, // ← 入力欄全体の高さ
                            fontSize: "0.75rem", // ← テキストのサイズ
                          },
                          "& input": {
                            padding: "4px 8px", // ← テキストの上下左右の余白
                          },
                          marginLeft: "16px",
                          width: "150px",
                        }}
                      />
                      <span style={{ fontWeight: "bold", margin: "0 12px" }}>~</span>
                      <TextField
                        type="date"
                        variant="outlined"
                        size="small"
                        sx={{
                          "& .MuiInputBase-root": {
                            height: 28, // ← 入力欄全体の高さ
                            fontSize: "0.75rem", // ← テキストのサイズ
                          },
                          "& input": {
                            padding: "4px 8px", // ← テキストの上下左右の余白
                            width: "150px",
                          },
                        }}
                      />
                    </Box>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2" fontWeight="bold">
                      差戻登録日
                    </Typography>
                    <Box>
                      <TextField
                        type="date"
                        variant="outlined"
                        size="small"
                        sx={{
                          "& .MuiInputBase-root": {
                            height: 28, // ← 入力欄全体の高さ
                            fontSize: "0.75rem", // ← テキストのサイズ
                          },
                          "& input": {
                            padding: "4px 8px", // ← テキストの上下左右の余白
                          },
                          marginLeft: "16px",
                          width: "150px",
                        }}
                      />
                      <span style={{ fontWeight: "bold", margin: "0 12px" }}>~</span>
                      <TextField
                        type="date"
                        variant="outlined"
                        size="small"
                        sx={{
                          "& .MuiInputBase-root": {
                            height: 28, // ← 入力欄全体の高さ
                            fontSize: "0.75rem", // ← テキストのサイズ
                          },
                          "& input": {
                            padding: "4px 8px", // ← テキストの上下左右の余白
                            width: "150px",
                          },
                        }}
                      />
                    </Box>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2" fontWeight="bold">
                      キャンセル日
                    </Typography>
                    <Box>
                      <TextField
                        type="date"
                        variant="outlined"
                        size="small"
                        sx={{
                          "& .MuiInputBase-root": {
                            height: 28, // ← 入力欄全体の高さ
                            fontSize: "0.75rem", // ← テキストのサイズ
                          },
                          "& input": {
                            padding: "4px 8px", // ← テキストの上下左右の余白
                          },
                          marginLeft: "16px",
                          width: "150px",
                        }}
                      />
                      <span style={{ fontWeight: "bold", margin: "0 12px" }}>~</span>
                      <TextField
                        type="date"
                        variant="outlined"
                        size="small"
                        sx={{
                          "& .MuiInputBase-root": {
                            height: 28, // ← 入力欄全体の高さ
                            fontSize: "0.75rem", // ← テキストのサイズ
                          },
                          "& input": {
                            padding: "4px 8px", // ← テキストの上下左右の余白
                            width: "150px",
                          },
                        }}
                      />
                    </Box>
                  </Stack>
                </Stack>
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <Box
                  sx={{
                    marginTop: "16px",
                  }}
                >
                  <Button
                    sx={{ padding: "0 48px", backgroundColor: "#4F9CFF", fontWeight: "bold", height: "28px", borderRadius: "6px", color: "white" }}
                  >
                    <SearchSharpIcon sx={{ color: "white" }}></SearchSharpIcon>
                    <span style={{ width: "30px" }}>検索</span>
                  </Button>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Box sx={{ backgroundColor: "white", display: "flex", justifyContent: "flex-end", padding: "8px 0", alignItems: "center" }}>
            <Typography>全 {data.length}件</Typography>
            <TextField
              select
              variant="outlined"
              sx={{
                "& .MuiInputBase-root": {
                  height: 28,
                  fontSize: "0.75rem",
                },
                "& .MuiSelect-select": {
                  padding: "4px 8px",
                },
                marginLeft: "16px",
                minWidth: "140px", // ← 必要に応じて幅を指定
              }}
              defaultValue="a"
            >
              <MenuItem value="a">50件</MenuItem>
              <MenuItem value="b">75件</MenuItem>
              <MenuItem value="c">100件</MenuItem>
            </TextField>
            <Button sx={{ margin: "0 12px", color: "white", backgroundColor: "#32CB00", fontWeight: "bold", height: "28px", borderRadius: "6px" }}>
              Excel DL
            </Button>
          </Box>
          <Box sx={{ backgroundColor: "white" }}>
            <table style={{ borderCollapse: "collapse", width: "100%", fontSize: "16px" }}>
              <thead style={{ backgroundColor: "lightblue" }}>
                <tr>
                  <th style={{ padding: "8px 0" }}>発注依頼番号</th>
                  <th>詳細</th>
                  <th>依頼ステータス</th>
                  <th>至急フラグ</th>
                  <th>SBENG_課</th>
                  <th>オーダーID</th>
                  <th>決裁ID</th>
                  <th>発注ID</th>
                  <th>対応者</th>
                  <th>発注完了日</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.id}>
                    <td style={{ textAlign: "center" }}>{row.number}</td>
                    <td
                      style={{
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center", // ← 中央寄せしたい場合
                        gap: "4px", // ← ← 間を詰める（数値を小さくする）
                        padding: "4px 8px",
                      }}
                    >
                      <Button sx={{ backgroundColor: "#4F9CFF", padding: "4px 8px" }} onClick={() => navigate("/request-detail", { state: { row } })}>
                        <FeedSharpIcon fontSize="small" sx={{ color: "white" }} />
                        <span style={{ color: "white", fontWeight: "bold" }}>詳細</span>
                      </Button>
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        borderRadius: "6px",
                      }}
                    >
                      <span
                        style={{
                          width: "100px",
                          color: "white",
                          fontWeight: "bold",
                          display: "inline-block",
                          borderRadius: "6px",
                          fontSize: "14px",
                          padding: "4px 0",

                          backgroundColor:
                            row.orderStatus === "作成中"
                              ? "#add8e6" // 水色
                              : row.orderStatus === "申請中"
                              ? "#ffa500" // オレンジ
                              : row.orderStatus === "対応中"
                              ? "#FFBF00" // 黄色
                              : row.orderStatus === "下書完了"
                              ? "green"
                              : row.orderStatus === "発注依頼中"
                              ? "blue"
                              : row.orderStatus === "発注完了"
                              ? "purple"
                              : "gray",
                        }}
                      >
                        {" "}
                        {row.orderStatus}
                      </span>
                    </td>
                    <td style={{ textAlign: "center" }}>{row.flag}</td>
                    <td style={{ textAlign: "center" }}>{row.sbeng}</td>
                    <td style={{ textAlign: "center" }}>{row.orderId}</td>
                    <td style={{ textAlign: "center" }}>{row.paymentId}</td>
                    <td style={{ textAlign: "center" }}>{row.requestId}</td>
                    <td style={{ textAlign: "center" }}>{row.responder}</td>
                    <td style={{ textAlign: "center" }}>{row.completeDay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default OrderRequestList;
