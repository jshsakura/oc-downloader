import React, { useState } from "react";
import { ipcRenderer } from "electron";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import CreateNewFolderTwoToneIcon from "@mui/icons-material/CreateNewFolderTwoTone";

const DirectoryPicker: React.FC = () => {
  const [directory, setDirectory] = useState<string>("");

  const selectDirectory = async () => {
    const path: string = await ipcRenderer.invoke("open-directory-dialog");
    if (path) {
      setDirectory(path);
    }
  };

  return (
    <Input
      placeholder="No directory chosen"
      readOnly
      value={directory}
      startDecorator={
        <Button
          variant="soft"
          color="primary"
          onClick={selectDirectory}
          startDecorator={<CreateNewFolderTwoToneIcon />}
        >
          Locate
        </Button>
      }
      sx={{ width: "100%" }}
    />
  );
};

export default DirectoryPicker;
