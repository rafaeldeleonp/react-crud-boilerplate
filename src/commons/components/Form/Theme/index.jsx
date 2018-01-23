import React from 'react';
import { FormGroup } from 'react-bootstrap/lib';
import { createTheme, Form } from 'react-reform';
import isString from 'lodash/isString';
import isFunction from 'lodash/isFunction';
import merge from 'lodash/merge';
import Modal from '../../Modal';
import Button from '../../Button';

const buildPrimaryButton = (options) => {
  if (!options.directProps.primary) {
    console.warn(
      'Forms need submit/primary button?',
      options.directProps,
    );
  }

  const cfg = {
    btnStyle: 'modal-primary',
    text: 'Registrar',
  };

  const {
    isValid, submitForm, status,
  } = options;

  if (cfg.onClick) {
    const handler = cfg.onClick;

    cfg.onClick = (e) => {
      if (handler(e) !== false) {
        return submitForm();
      }
      return null;
    };
  } else {
    cfg.onClick = () => {
      submitForm();
    };
  }

  if (status === 'pending' || !isValid) {
    cfg.disabled = true;
  }

  const primaryProps = merge(cfg, options.directProps.primary);

  return (<Button {...primaryProps} />);
};

const buildSecondaryButton = (options) => {
  if (!options.directProps.secondary) return null;

  const cfg = {
    btnStyle: 'modal-secondary',
    text: 'Cancelar',
  };

  if (cfg.onClick) {
    const handler = cfg.onClick;
    // Wrap onClick to let it know submitForm method. Just do whatever you need.
    cfg.onClick = (e) => {
      handler(e, options.submitForm);
    };
  } else {
    cfg.onClick = () => {
      console.warn('Secondary button attached to form without onClick handler. You really need this button?');
    };
  }

  const secondaryProps = merge(cfg, options.directProps.secondary);

  return (<Button {...secondaryProps} />);
};

const renderForm = function renderInlineForm(FormContainer, children, options) {
  const { directProps } = options;
  const className = directProps.className || '';
  const hasExtra = Boolean(directProps.extraFooter);

  return (
    <FormContainer
      className={`form-horizontal ${className}`}
      style={{ ...directProps.style }}
    >
      <div className="form-body">
        {children}
      </div>
      <div className="form-footer">
        {(buildSecondaryButton(options))}
        {(buildPrimaryButton(options))}
        {hasExtra && directProps.extraFooter}
      </div>
    </FormContainer >
  );
};

const renderModalForm = function renderInlineForm(FormContainer, children, options) {
  const { directProps } = options;
  const className = directProps.className || '';

  return (
    <Modal
      title={directProps.title}
      show={directProps.show}
      onHide={directProps.onHide}
      footer={
        <div>
          {(buildSecondaryButton(options))}
          {(buildPrimaryButton(options))}
        </div>
      }
    >
      <FormContainer
        className={`form-horizontal ${className}`}
        style={{ ...directProps.style }}
      >
        <div className="form-body">
          {children}
        </div>
      </FormContainer >
    </Modal>
  );
};

const renderField = function renderField(Field, options) {
  const {
    directProps, validations, id, isDirty,
  } = options;
  const { ...rest } = directProps;
  const isValid = validations.every(({ isValid }) => isValid);

  return (
    <FormGroup
      className={directProps.className}
      validationState={!isValid && isDirty ? 'error' : null}
    >
      <Field id={id} {...rest} />
    </FormGroup>
  );
};

const Default = createTheme({
  renderForm,
  renderField,
});

const InlineModal = createTheme({
  renderForm: renderModalForm,
  renderField,
});

if (!Form.Themes) Form.Themes = {};

Form.Themes.Inline = 'inline';
Form.Themes.InlineModal = 'inline-modal';

export default {
  inline: Default,
  'inline-modal': InlineModal,
};
