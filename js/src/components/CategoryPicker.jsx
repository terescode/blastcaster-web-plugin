import React, {PropTypes} from 'react';
import FloatingLabel from './FloatingLabel';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import styles from './CategoryPicker.css';

const CategoryPickerRow = ({
  children,
  term,
  name,
  fieldName,
  selected,
  ...otherProps
}) => {
  return (
    <TableRow {...otherProps}>
      {children}
      <TableRowColumn className={styles.cell}>
        {selected && <input type="hidden" name={fieldName} value={term} />}
        {name}
      </TableRowColumn>
    </TableRow>
  );
};

CategoryPickerRow.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  term: PropTypes.number.isRequired,
  selected: PropTypes.bool
};

function isSelected(cat, cats) {
  for (var i = 0; i < cats.length; i += 1) {
    if (cat.id === Number(cats[i])) {
      return true;
    }
  }
  return false;
}

const CategoryPicker = ({
  categories,
  defaultValue,
  fieldName
}) => {
  return (
    <div className={styles.wrapper}>
      <FloatingLabel label='Categories' />
      <Table
        height='150px'
        selectable={true}
        multiSelectable={true}
      >
        <TableBody
          displayRowCheckbox={true}
          deselectOnClickaway={false}
        >
          {categories.map((cat, index) => {
            var selected = (defaultValue ? isSelected(cat, defaultValue) : false);
            return (
              <CategoryPickerRow
                className={styles.row}
                key={index}
                fieldName={fieldName}
                name={cat.label}
                term={cat.id}
                selected={selected}
              />
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

CategoryPicker.propTypes = {
  categories: PropTypes.array.isRequired,
  defaultValue: PropTypes.array,
  fieldName: PropTypes.string.isRequired,
};

export default CategoryPicker;
