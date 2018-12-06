import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach(() => {
    const initalState = {
        comments: ['Comment 1', 'Comment 2']
    };
    
    wrapped = mount(
        <Root initalState={initalState}>
            <CommentList />
        </Root>
    );
});

it('creates one li per comment', () => {
    expect(wrapped.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
    console.log(wrapped.render().text()).toContain('Comment 1');
    console.log(wrapped.render().text()).toContain('Comment 1');
});