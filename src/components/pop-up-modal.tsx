import React from "react";
import {
  View,
  Modal,
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

interface PopUpModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
const PopupModal: React.FC<PopUpModalProps> = ({
  visible,
  onClose,
  children,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={onClose}
        style={styles.modalContainer}
      >
        <TouchableWithoutFeedback onPress={() => {}}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
            {children}
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").height * 0.3,
  },
  closeButton: {
    marginTop: 16,
    alignSelf: "flex-end",
    padding: 8,
    borderWidth: 1,
    borderColor: "red",
  },
  closeButtonText: {
    color: "blue", // You can customize the color of the close button text here
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PopupModal;
