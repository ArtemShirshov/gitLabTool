import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Input } from '@crpt-ui/core';

import { Modal } from 'components/Modal/Modal';

import {
  getOpenCreateTagDialog,
  getDataCreateTagDialog,
} from './ducks/CreateTagDialog.selectors';
import { closeCreateTagDialog } from './ducks/CreateTagDialog.reducer';
import { createNewTag } from '../ducks';

const CreateTagDialog = ({
  closeCreateTagDialog,
  createNewTag,
  data,
  isOpen,
}) => {
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(`elk-17.40.0-${data.release}`);
  }, [data.release]);

  const onChange = useCallback((_, value) => {
    setValue(value);
  }, []);

  const onSubmit = useCallback(() => {
    createNewTag({
      tagName: value,
      ref: `release/${data.release}`,
    });
  }, [createNewTag, data.release, value]);

  return (
    <Modal
      onClose={() => closeCreateTagDialog()}
      open={isOpen}
      title="Создать тег"
      actions={[
        { label: 'Создать', onClick: onSubmit },
        { label: 'Закрыть', variant: 'outlined' },
      ]}
    >
      <Input
        label="Тег"
        onChange={onChange}
        defaultValue={`elk-17.40.0-${data.release}`}
      />
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  isOpen: getOpenCreateTagDialog(state),
  data: getDataCreateTagDialog(state),
});

const mapDispatchToProps = {
  closeCreateTagDialog,
  createNewTag,
};

export const CreateTagDialogConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateTagDialog);
