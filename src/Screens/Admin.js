import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TextInput,
} from "react-native";

export default function Admin() {
  const [isBool, setisbool] = useState(false);
  const [data, setData] = useState([
    {
      url: "https://caodang.fpt.edu.vn/wp-content/uploads/18198154_10208600482868814_3469513_n-234x375.png",
      name: "Phạm Tiến Dũng",
      moTa: "Sinh viên FPT Polytechnic",
    },
  ]);

  const [name, setName] = useState("");
  const [moTa, setMoTa] = useState("");
  const [anh, setAnh] = useState("");

  return (
    <View
      style={{
        padding: 20,
        marginTop: 30,
      }}
    >
      <Text>HỌ TÊN: PHẠM TIẾN DŨNG</Text>
      <Text>MSV: PH25533</Text>
      <Button
        onPress={() => {
          setisbool(!isBool);
        }}
        title="THÊM MỚI"
      ></Button>
      {isBool ? (
        <>
          <TextInput
            placeholder="Họ Tên:"
            onChangeText={(text) => {
              setName(text);
            }}
            style={{
              padding: 10,
              width: 370,
              borderWidth: 1,
              height: 40,
              marginVertical: 8,
            }}
          />
          <TextInput
            placeholder="Mô tả:"
            onChangeText={(text) => {
              setMoTa(text);
            }}
            style={{ padding: 10, width: 370, borderWidth: 1, height: 40 }}
          />
          <TextInput
            onChangeText={(text) => {
              setAnh(text);
            }}
            placeholder="Đường Dẫn Ảnh:"
            style={{
              padding: 10,
              width: 370,
              borderWidth: 1,
              height: 40,
              marginVertical: 8,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <Button
              onPress={() => {
                setData([...data, { anh, name, moTa }]);
              }}
              style={{ width: 200, height: 40 }}
              title="Thêm"
            />
            <Button
              onPress={() => {
                setisbool(false);
              }}
              style={{ width: 200, height: 40 }}
              title="Hủy"
            />
          </View>
        </>
      ) : null}
      <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View>
                <Image
                  style={{
                    height: 80,
                    width: 50,
                    borderRadius: 25,
                    marginTop: 10,
                  }}
                  source={{ uri: item.url }}
                />
              </View>
              <View style={{ marginLeft: 30 }}>
                <Text style={{ marginTop: 25 }}>{item.name}</Text>
                <Text>{item.moTa}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
