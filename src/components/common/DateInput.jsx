import { Box } from "@mui/material";

function DateInput({ label, id, name = "", value = "", onChange }) {
  return (
    <Box sx={{ width: "50%", py: 1 }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <label
          htmlFor={id}
          style={{
            fontWeight: "bold",
            fontSize: "14px",
            whiteSpace: "nowrap",
            marginRight: "8px",
          }}
        >
          {label}
        </label>
        <input
          type="date"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          style={{
            padding: "8px",
            width: "45%", // 適宜調整可能
            maxWidth: "250px", // 最大幅を制限
            boxSizing: "border-box",
            marginRight: "12px", // 自動で右に寄せる
          }}
        />
      </Box>
    </Box>
  );
}

export default DateInput;
