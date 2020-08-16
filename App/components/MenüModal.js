import React, { useState } from "react";
import { StyleSheet, View, Modal, Text, Button } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import BigText from "../components/Text/BigText";

const MenüModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <View style={{ backgroundColor: "#f2f2f2", flex: 1 }}>
      <BigText>Hallo Paul, bitte wähle aus.</BigText>
      <Button
        title="open"
        style={{ width: 30 }}
        onPress={() => setModalOpen(true)}
      />

      <Modal visible={modalOpen} animationType="slide" transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              onPress={() => setModalOpen(false)}
            />
          </View>
        </View>
      </Modal>
      <MaterialIcons name="add" size={24} onPress={() => setModalOpen(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "fff",
    margin: 50,
    padding: 20,
    borderRadius: 16,
  },
  modalBackground: {
    backgroundColor: "000aa",
    flex: 1,
  },
});

export default MenüModal;
