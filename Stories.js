import { useEffect, useState } from "react";
import { FlatList, Text, Button } from "react-native";

export const Stories = ({ firebaseIface }) => {
  const [stories, setStories] = useState([]);

  const storiesChanged = (newStories) => {
    setStories(newStories);
  };

  useEffect(() => {
    if (stories.length === 0) {
      firebaseIface.subscribeStories(storiesChanged);
    }
  });

  return (
    <>
      <Button title="Add story" onPress={() => firebaseIface.addStory()} />
      <FlatList
        data={stories}
        renderItem={(story) => (
          <Text style={{ color: "white" }}>
            {[
              story.item.id,
              story.item.subject,
              story.item.body,
              story.item.date
            ].join(", ")}
          </Text>
        )}
      />
    </>
  );
};
