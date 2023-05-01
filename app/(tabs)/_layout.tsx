import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';
import { Routes } from '../../constants/routes';
import { AntDesign, Entypo, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name={Routes.HOME}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Entypo name="home" size={30} color={color} />
        }}
      />

      <Tabs.Screen
        name={Routes.PORTFOLIO}
        options={{
          title: 'Portfolio',
          tabBarIcon: ({ color }) => <AntDesign name="piechart" size={30} color={color} />
        }}
      />

      <Tabs.Screen
        name={Routes.MARKET}
        options={{
          title: 'Market',
          tabBarIcon: ({ color }) => <FontAwesome5 name="chart-line" size={30} color={color} />
        }}
      />

      <Tabs.Screen
        name={Routes.RANKINGS}
        options={{
          title: 'Rankings',
          tabBarIcon: ({ color }) => <MaterialIcons name="leaderboard" size={30} color={color} />
        }}
      />

      <Tabs.Screen
        name={Routes.PROFILE}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome name="user" size={30} color={color} />
        }}
      />
    </Tabs>
  );
}
