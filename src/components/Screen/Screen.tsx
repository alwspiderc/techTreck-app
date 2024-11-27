import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { Box, BoxProps } from '../Box/Box';

import { useAppSafeArea, useAppTheme } from '@hooks';

import { ScreenHeader, ScrollViewContainer, ViewContainer } from './components';

export interface ScreenProps extends BoxProps {
	children: React.ReactNode;
	canGoBack?: boolean;
	scrollable?: boolean;
	title?: string;
	leftCanGoBack?: boolean;
	refreshControl?: React.ReactElement;
}

export function Screen({
	children,
	canGoBack = false,
	scrollable = false,
	style,
	title,
	leftCanGoBack = false,
	refreshControl,
	...boxProps
}: ScreenProps) {
	const { top, bottom } = useAppSafeArea();
	const { colors } = useAppTheme();

	const Container = scrollable ? ScrollViewContainer : ViewContainer;
	return (
		<KeyboardAvoidingView
			style={{ flex: 1 }}
			behavior={Platform.OS === 'ios' ? 'padding' : undefined}
		>
			<Container
				backgroundColor={colors.background}
				refreshControl={refreshControl}
			>
				<Box
					paddingHorizontal="s24"
					style={[{ paddingTop: top, paddingBottom: bottom }, style]}
					{...boxProps}
				>
					<ScreenHeader
						canGoBack={canGoBack}
						title={title}
						leftCanGoBack={leftCanGoBack}
					/>
					{children}
				</Box>
			</Container>
		</KeyboardAvoidingView>
	);
}
