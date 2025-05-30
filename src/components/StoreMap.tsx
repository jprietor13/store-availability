import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  height: 550,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

type Coordinates = {
  lat: number;
  lng: number;
};

type Props = {
  coordinates: Coordinates;
  storeName: string;
  address: string;
  stock: number;
  isOpen: boolean;
};

const StoreMap: React.FC<Props> = ({
  coordinates,
  storeName,
  address,
  stock,
  isOpen,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="container-button">
      <Button
        onClick={handleOpen}
        className="btn-open-map"
        sx={{ textTransform: "none" }}
        disabled={stock < 7 || !isOpen ? true : false}
      >
        Ver ubicación
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style }}>
          <div className="store-modal-description">
            <h3>{storeName}</h3>
            <span>{address}</span>
          </div>
          <iframe
            width={"100%"}
            height={"77%"}
            style={{ flex: 1, border: "none" }}
            src={`https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}&z=15&output=embed`}
          ></iframe>
          <div className="container-close-modal">
            <Button onClick={handleClose} sx={{ textTransform: "none" }}>
              Cerrar
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default StoreMap;
