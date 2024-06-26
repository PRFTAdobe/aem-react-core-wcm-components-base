# AEM WCM Components - React Core Implementation

This module provides a React implementation for the [AEM core components](https://www.aemcomponents.dev/).
This enables you to use the core components:
-In
the [AEM SPA editor](https://docs.adobe.com/content/help/en/experience-manager-64/developing/headless/spas/spa-overview.html)
with React
-Or in any other React context, provided you have the input needed to instantiate the components.

[Introduction Video and Demo](https://www.youtube.com/watch?v=9759AhM7fAc)

Current supported / exported components:

### Page Authoring

- Button
- Download
- Embed
- Image
- List
- Separator
- Teaser
- Text
- Title

### Layout

- Breadcrumb
- Language Navigation
- Navigation

### Containers

For the containers (Accordion, Tabs, Carousel, and Container) we do not provide any implementation in this project.
It does not make sense to provide it for web-components as you can leverage the normal Core Components implementation
such as a Tab Container, and drag your web components in there.
Instead, we provide them for the SPA editor only, introducing a dependency, and therefore we moved it into a separate
project "aem-react-core-wcm-components-spa".

## Usage

You can choose to import the entire library at once OR import components individually.
The latter is useful if you want to only enable a few components, and you want to save your javascript footprint.

### Importing the whole library:

```
import * as BaseCoreComponents from "aem-react-core-wcm-components-base";
const { CoreBreadCrumb, CoreImage } = BaseCoreComponents;
```

### Importing the breadcrumb and image component individually:

```
import { CoreBreadCrumb, CoreImage } from "aem-react-core-wcm-components-base";
```

### Using the imported code

Now that you have the CoreBreadCrumb and CoreImage imported, you can use them in your project.
The properties of the Button 1 on 1 correspond to the Sling Model Exporter (.model.json) output.

Note: There are some exceptions where some extra properties are added (mainly i18n labels) that are currently not
present in the OOTB sling model exports.
These can be added by the project itself with delegation. If they are not present, the default (English) values will be
used.

#### Image - Example with the spa editor:

```
import { CoreImage, ImageEditConfig } from 'aem-react-core-wcm-components-base';

MapTo('my-project/components/image')(
  CoreImage,
  ImageEditConfig
);
