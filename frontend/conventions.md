# Conventions

## Styling
We use MUI [styled components](https://mui.com/system/styled)
```js
const MyThemeComponent = styled('div')(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}));
```

## Functions
We use arrow functions

And React.FC for components
```js
const NavigationBar: React.FC = () => {
```

## Index
React components are coded directly into the index.tsx file.
For other cases, if a folder is exporting multiple things, they should all have their own file and index.ts will only export them.

## Assets
As recommended by Next.js, the assets are all added into [public/assets](public/assets) folder. See [docs/how-to/svg.md](../docs/how-to/svg.md)

## Props
Declare an interface on top of the component
ex:
```js
interface FormFieldProps {
  errorText: string | undefined;
  labelText: string | undefined;
  fieldName: string | undefined;
}

export default const FormField : React.FC<FormFieldProps> = ({
  children,
  errorText,
  labelText,
  fieldName,
}) => {
...
```
