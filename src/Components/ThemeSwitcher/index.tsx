import useTheme from '@/utils/useTheme';

export default function ThemeSwitcher() {
	const { theme, changeTheme } = useTheme();

	return (
		<select value={theme} onChange={(e) => changeTheme(e.target.value)}>
			<option value="light">Light</option>
			<option value="dark">Dark</option>
			<option value="contrast">High Contrast</option>
		</select>
	);
}
