import { useState } from "react";
import { Box, IconButton, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TextInput from "./TextInput";
import DateInput from "./DateInput";

function PostalCodeSearch() {
  const [zip, setZip] = useState("");
  const [prefecture, setPrefecture] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!zip.match(/^\d{7}$/)) {
      setError("7桁の郵便番号を入力してください");
      return;
    }

    try {
      const res = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zip}`);
      const data = await res.json();

      if (data.results) {
        const result = data.results[0];
        setPrefecture(result.address1);
        setCity(result.address2 + result.address3);
        setError("");
      } else {
        setError("該当する住所が見つかりませんでした");
        setPrefecture("");
        setCity("");
      }
    } catch (e) {
      setError("通信エラーが発生しました");
    }
  };

  return (
    <Stack direction="row" flexWrap="wrap" paddingLeft="16px">
      {/* 郵便番号 */}
      <Box sx={{ width: "50%", py: 1 }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
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
            郵便番号
          </label>

          {/* 右寄せ：marginLeft: auto */}
          <Box
            sx={{
              display: "flex",
              marginLeft: "auto", // ← ここがキモ！
              alignItems: "center",
            }}
          >
            <input
              id="zip"
              type="text"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              placeholder="例：1000001"
              style={{
                padding: "8px",
                width: "100%",
                boxSizing: "border-box",
              }}
            />
            <IconButton
              onClick={handleSearch}
              aria-label="search"
              sx={{
                backgroundColor: "#42a5f5",
                color: "white",
                borderRadius: "4px",
                padding: "4px",
                fontSize: "14px",
                marginRight: "12px",
                "&:hover": {
                  backgroundColor: "#1e88e5",
                },
                minWidth: "32px",
                minHeight: "32px",
              }}
            >
              <SearchIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* 以下、すべて同列で表示 */}
      <TextInput label="納品先_都道府県" id="pref" name="pref" value={prefecture} disabled />
      <TextInput label="納品先_市区町村" id="city" name="city" value={city} disabled />
      <TextInput label="納品先_番地以降の住所" id="addr" name="addr" />
      <TextInput label="納品先_担当者" id="person" name="person" />
      <DateInput label="納品日" id="end" name="end" />

      {error && (
        <Box sx={{ width: "100%" }}>
          <div style={{ color: "red" }}>{error}</div>
        </Box>
      )}
    </Stack>
  );
}

export default PostalCodeSearch;
