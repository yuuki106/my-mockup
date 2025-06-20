import { Box } from "@mui/material";

function SelectInput({ label, id, name, value, onChange, options = [] }) {
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
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          style={{
            padding: "8px",
            width: "45%", // 必要に応じて調整
            boxSizing: "border-box",
            marginRight: "12px", // 自動で右に寄せる
          }}
        >
          <option value="">選択してください</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </Box>
    </Box>
  );
}

export default SelectInput;
