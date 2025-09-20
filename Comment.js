import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useState } from "react";

const Comment = () => {
  const [value, setValue] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "John",
      content: "This is my comment!",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      author: "Jane",
      content: "Great post!",
      timestamp: "1 hour ago",
    },
    {
      id: 3,
      author: "Mike",
      content: "Interesting thoughts 🤔",
      timestamp: "30 minutes ago",
    },
  ]);

  const addComment = () => {
    if (value.trim()) {
      const newComment = {
        id: Date.now(),
        author: "You",
        content: value.trim(),
        timestamp: "Just now",
      };
      setComments([newComment, ...comments]);
      setValue("");
    }
  };

  const renderComment = ({ item }) => (
    <View style={styles.commentItem}>
      <View style={styles.commentHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{item.author[0]}</Text>
        </View>
        <View style={styles.commentInfo}>
          <Text style={styles.author}>{item.author}</Text>
          <Text style={styles.timestamp}>{item.timestamp}</Text>
        </View>
      </View>
      <Text style={styles.content}>{item.content}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <View style={styles.header}>
        <Text style={styles.headerText}>Comments ({comments.length})</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={setValue}
          placeholder="Write a comment..."
          multiline
        />
        <TouchableOpacity style={styles.postButton} onPress={addComment}>
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={comments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderComment}
        style={styles.commentsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "white",
    padding: 16,
    paddingTop: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  inputContainer: {
    backgroundColor: "white",
    padding: 16,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginRight: 8,
    maxHeight: 80,
  },
  postButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  postButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  commentsList: {
    flex: 1,
  },
  commentItem: {
    backgroundColor: "white",
    padding: 16,
    marginVertical: 4,
    marginHorizontal: 8,
    borderRadius: 8,
  },
  commentHeader: {
    flexDirection: "row",
    marginBottom: 8,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  avatarText: {
    color: "white",
    fontWeight: "bold",
  },
  commentInfo: {
    flex: 1,
  },
  author: {
    fontWeight: "bold",
    fontSize: 14,
  },
  timestamp: {
    color: "#666",
    fontSize: 12,
  },
  content: {
    fontSize: 14,
    lineHeight: 18,
  },
});

export default Comment;
