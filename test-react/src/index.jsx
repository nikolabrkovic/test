/* global Liferay */

import React, {createElement, Fragment} from 'react';
import {createRoot} from 'react-dom/client';

import SimpleA from './components/A';
import SimpleB from './components/B';
import SimpleCard from './components/Card';
import Accordion from './components/AccordionItem';

import './styling/card.css';
import './styling/accordion.css';


const A_VIEW_WATCH_ATTRIBUTES = ['module-id'];
const B_VIEW_WATCH_ATTRIBUTES = ['title'];

const ELEMENT_ID_A_SIMPLE_COMP = 'liferay-a-simple-web-component';
const ELEMENT_ID_B_SIMPLE_COMP = 'liferay-b-simple-web-component';
const ELEMENT_ID_C_SIMPLE_COMP = 'liferay-c-simple-web-component';
const ELEMENT_ID_D_SIMPLE_COMP = 'liferay-d-simple-web-component';

class SimpleAWebComponent extends HTMLElement {
	static get observedAttributes() {
		return A_VIEW_WATCH_ATTRIBUTES;
	}

	constructor() {
		super();
		this.root = null;
	}

	connectedCallback() {
		if (!this.root) {
			this.root = createRoot(this);
		}
		this.renderComponent();
	}

	renderComponent() {
		if (this.root) {
			this.root.render(
				<SimpleA></SimpleA>
			);
		}
	}

	disconnectedCallback() {
		if (this.root) {
			this.root.unmount();
			this.root = null;
		}
	}
}

class SimpleBWebComponent extends HTMLElement {
	static get observedAttributes() {
		return B_VIEW_WATCH_ATTRIBUTES;
	}

	constructor() {
		super();
		this.root = null;
	}

	connectedCallback() {
		if (!this.root) {
			this.root = createRoot(this);
		}
		this.renderComponent();
	}

	renderComponent(subtitle = this.getAttribute('subtitle') || '', 
	title =this.getAttribute('title') || '') {
		if (this.root) {
			this.root.render(
				<SimpleB title={title} subtitle={subtitle}></SimpleB>
			);
		}
	}

	disconnectedCallback() {
		if (this.root) {
			this.root.unmount();
			this.root = null;
		}
	}
}

class SimpleCWebComponent extends HTMLElement {
	static get observedAttributes() {
		return B_VIEW_WATCH_ATTRIBUTES;
	}

	constructor() {
		super();
		this.shadow = this.attachShadow({mode: 'open'});
		this.root = null;
	}

	connectedCallback() {
		if (!this.root) {
			this.root = createRoot(this.shadow);
		}
		this.renderComponent();
	}

	renderComponent(mainTitle = this.getAttribute('mainTitle') || '') {

		if (this.root) {
			this.root.render(
				<Accordion/>
			);
		}
	}

	disconnectedCallback() {
		if (this.root) {
			this.root.unmount();
			this.root = null;
		}
	}
}

class SimpleCardWebComponent extends HTMLElement {
	static get observedAttributes() {
		return B_VIEW_WATCH_ATTRIBUTES;
	}

	constructor() {
		super();
		this.shadow = this.attachShadow({mode: 'open'});
		this.root = null;
	}

	connectedCallback() {
		if (!this.root) {
			this.root = createRoot(this.shadow);
		}
		this.renderComponent();
	}

	renderComponent() {

		if (this.root) {

			this.root.render(
				<SimpleCard/>
			);
		}
	}

	disconnectedCallback() {
		if (this.root) {
			this.root.unmount();
			this.root = null;
		}
	}
}

if (!customElements.get(ELEMENT_ID_A_SIMPLE_COMP)) {
	customElements.define(ELEMENT_ID_A_SIMPLE_COMP, SimpleAWebComponent);
}

if (!customElements.get(ELEMENT_ID_B_SIMPLE_COMP)) {
	customElements.define(ELEMENT_ID_B_SIMPLE_COMP, SimpleBWebComponent);
}

if (!customElements.get(ELEMENT_ID_C_SIMPLE_COMP)) {
	customElements.define(ELEMENT_ID_C_SIMPLE_COMP, SimpleCWebComponent);
}

if (!customElements.get(ELEMENT_ID_D_SIMPLE_COMP)) {
	customElements.define(ELEMENT_ID_D_SIMPLE_COMP, SimpleCardWebComponent);
}