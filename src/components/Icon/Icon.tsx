import React from 'react';
import { Pressable } from 'react-native';

import { useAppTheme } from '@hooks';
import { ThemeColors } from '@theme';

import { ArrowLeftIcon } from '../../assets/icons/ArrowLeftIcon';
// import { CheckRoundIcon } from '../../assets/icons/CheckRoundIcon';
// import {ChevronRightIcon} from '../../assets/icons/ChevronRightIcon';
// import {ErrorRoundIcon} from '../../assets/icons/ErrorRoundIcon';
import { EyeOffIcon } from '../../assets/icons/EyeOffIcon';
import { EyeOnIcon } from '../../assets/icons/EyeOnIcon';
// import {FileFill} from '../../assets/icons/FileFill';r
// import {HomeFill} from '../../assets/icons/HomeFill';
// import {PlusFill} from '../../assets/icons/PlusFill';
// import {ProfileFill} from '../../assets/icons/ProfileFill';
// import {SearchIcon} from '../../assets/icons/SearchIcon';
// import {SettingsIcon} from '../../assets/icons/SettingsIcon';
export interface IconBase {
	size?: number;
	color?: string;
}

export interface IconProps {
	name: IconName;
	color?: ThemeColors;
	size?: number;
	onPress?: () => void;
}
export function Icon({
	name,
	color = 'backgroundContrast',
	size,
	onPress
}: IconProps) {
	const { colors } = useAppTheme();
	const SVGIcon = iconRegistry[name];

	if (onPress) {
		return (
			<Pressable hitSlop={10} onPress={onPress}>
				<SVGIcon color={colors[color]} size={size} />
			</Pressable>
		);
	}

	return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
	arrowLeft: ArrowLeftIcon,
	// checkRound: CheckRoundIcon,
	// errorRound: ErrorRoundIcon,
	// chevronRight: ChevronRightIcon,
	eyeOn: EyeOnIcon,
	eyeOff: EyeOffIcon
	// fileFill: FileFill,
	// homeFill: HomeFill,
	// plusFill: PlusFill,
	// profileFill: ProfileFill,
	// search: SearchIcon,
	// settings: SettingsIcon,
};

type IconType = typeof iconRegistry;

type IconName = keyof IconType;
