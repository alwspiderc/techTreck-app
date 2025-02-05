import React, { useContext } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { Button, Screen } from '@components';
import { AppScreenProps } from '@routes';

import { MenuItem, MenuItemProps } from './components/MenuItem';
import { AuthContext } from 'src/context/Auth';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SettingsScreen({
	navigation
}: AppScreenProps<'SettingsScreen'>) {
	const { logout } = useContext(AuthContext);

	const items: MenuItemProps[] = [
		{ label: 'Termos de uso', onPress: () => {} },
		{ label: 'Política de privacidade', onPress: () => {} }
		// {
		//   label: 'Modo escuro',
		//   onPress: () => {},
		// },
	];

	function renderItem({ item }: ListRenderItemInfo<MenuItemProps>) {
		return <MenuItem {...item} />;
	}

	return (
		<Screen canGoBack title="Configurações" flex={1}>
			<FlatList
				data={items}
				bounces={false}
				renderItem={renderItem}
				ListFooterComponent={
					<Button mt="s48" title="Sair da conta" onPress={logout} />
				}
			/>
		</Screen>
	);
}
