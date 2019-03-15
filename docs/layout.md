Adding `flexDirection` to a component's style determines the *primary axis* of its layout.
Should the children be organized horizontally (row) or vertically (column)? The default is column.

Adding `justifyContent` to a component's style determines the distribution of children along the primary axis.
Should children be distributed at the start, the center, the end, or spaced evenly?
Available options are flex-start, center, flex-end, space-around, space-between and space-evenly.

Adding `alignItems` to a component's style determines the alignment of children along the secondary axis 
(if the primary axis is row, then the secondary is column, and vice versa). 
Should children be aligned at the start, the center, the end, or stretched to fill?
Available options are flex-start, center, flex-end, and stretch.

```ts
flexDirection: 'row' | 'column'
justifyContent: 'flex-start' | 'center' | 'flex-end' | 'space-around' | 'space-between' | 'space-evenly'
alignItems: 'flex-start' | 'center' | 'flex-end' | 'stretch'
```