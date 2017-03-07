import React from 'react';
import _Story from './components/Story';
import {H1, H2, H3, H4, H5, H6, Code, P, UL, A, LI} from './components/markdown';

export const Story = _Story;

const defaultOptions = {
  inline: false,
  header: true,
  source: true,
};

const defaultMtrcConf = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  code: Code,
  p: P,
  a: A,
  li: LI,
  ul: UL,
};

export default {
  addWithInfo(storyName, info, storyFn, _options) {
    if (typeof storyFn !== 'function') {
      if (typeof info === 'function') {
        _options = storyFn;
        storyFn = info;
        info = '';
      } else {
        throw new Error('No story defining function has been specified');
      }
    }

    const options = {
      ...defaultOptions,
      ..._options,
    };

    const mtrcConf = {...defaultMtrcConf};
    if (options && options.mtrcConf) {
      Object.assign(mtrcConf, options.mtrcConf);
    }

    return this.add(storyName, (context) => {
      const props = {
        info,
        context,
        showInline: Boolean(options.inline),
        showHeader: Boolean(options.header),
        showSource: Boolean(options.source),
        mtrcConf,
      };

      return (
        <Story {...props}>
          {storyFn(context)}
        </Story>
      );
    });
  },
};

export function setDefaults(newDefaults) {
  return Object.assign(defaultOptions, newDefaults);
}
