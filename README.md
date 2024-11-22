1. Build React Project 
2. index.js file push to git - use https://statically.io/convert/ as public CDN to host file 
3. use Import JS Import Maps CE inside Liferay to import components
4. Create Liferay Base Fragment 
	a) inside JS Window add - import "bareSpecifier" - Bare Specifier which you set while creating JS Import Maps CE
	b) inside HTML window 
		<liferay-c-simple-web-component mainTitle="Accoridion">
			{PART IS MISSING FOR BINDING TO SLOT???}
		</liferay-c-simple-web-component>

We tried:

	<lfr-editable id="acc-item-title" slot="acc-item-title">

	</lfr-editable>

	<lfr-editable id="acc-item-content" slot="acc-item-content">

	</lfr-editable>

Questions:

1. Is something missing inside React Components?
2. Is something missing inside index.js for Web Components?
3. Is something wrong with HTML part of Fragment inside Lifereay?
