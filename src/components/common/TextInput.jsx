import { Box } from "@mui/material";

function TextInput({ label, id, name = "", value = "", disabled = false, onChange }) {
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
          id={id}
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          style={{
            padding: "8px",
            width: "45%", // 必要に応じて調整
            boxSizing: "border-box",
            marginRight: "12px", // 自動で右に寄せる
          }}
        />
      </Box>
    </Box>
  );
}

export default TextInput;
