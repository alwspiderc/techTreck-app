import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppStackParamList } from './AppStack';
import { AppTabBottomTabParamList } from './AppTabNavigator';
import { AuthStackParamList } from './AuthStack';
import { OnboardingStackParamList } from './OnboardingStack';
import {ProfileStackParamList } from './ProfileStack';

declare global {
	namespace ReactNavigation {
		interface RootParamList extends AuthStackParamList, ProfileStackParamList, AppStackParamList {}
	}
}

export type AppScreenProps<RouteName extends keyof AppStackParamList> =
	NativeStackScreenProps<AppStackParamList, RouteName>;

export type AuthScreenProps<RouteName extends keyof AuthStackParamList> =
	NativeStackScreenProps<AuthStackParamList, RouteName>;

export type OnboardingScreenProps<
	RouteName extends keyof OnboardingStackParamList
> = NativeStackScreenProps<OnboardingStackParamList, RouteName>;

export type ProfileScreenProps<RouteName extends keyof ProfileStackParamList> =
	NativeStackScreenProps<ProfileStackParamList, RouteName>;

export type AppTabScreenProps<
	RouteName extends keyof AppTabBottomTabParamList
> = CompositeScreenProps<
	BottomTabScreenProps<AppTabBottomTabParamList, RouteName>,
	NativeStackScreenProps<AppStackParamList, 'AppTabNavigator'>
>;


