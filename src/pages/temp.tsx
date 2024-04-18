import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import ColorSchemeToggle from "../components/common/ColorSchemeToggle";

const Downloads = () => {
  return (
    <Box
      component="main"
      className="MainContent"
      sx={{
        px: { xs: 2, md: 6 },
        pt: {
          xs: "calc(12px + var(--Header-height))",
          sm: "calc(12px + var(--Header-height))",
          md: 3,
        },
        pb: { xs: 2, sm: 2, md: 3 },
        flex: 1,
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
        height: "100dvh",
        gap: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          mb: 1,
          gap: 1,
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "start", sm: "center" },
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <ColorSchemeToggle sx={{ ml: "auto" }} />
        <Typography level="h2" component="h1">
          Settings
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Typography level="title-lg">OpenCourse</Typography>
      </Box>
      세팅 페이지
    </Box>
  );
};

export default Downloads;
