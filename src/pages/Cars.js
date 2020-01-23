import React, { useState } from "react";

import { StyleSheet, View, TextInput } from "react-native";

function Cars() {
  const [CarName, setCarName] = useState("");

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={{ height: 40 }}
          placeholder="Alterar Nome"
          onChangeText={setUserName}
          value={userName}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Cars;
