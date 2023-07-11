# WEB103 Prework - _👉🏿 Creatorverse_

Submitted by: **👉🏿 Sai Sumanth Goud Parakala**

About this web app: **👉🏿 app description here**

Time spent: **👉🏿 35 to 40** hours

## Required Features

The following **required** functionality is completed:

<!-- 👉🏿👉🏿👉🏿 Make sure to check off completed functionality below -->

- [x] **A logical component structure in React is used to create the frontend of the app**
- [x] **At least five content creators are displayed on the homepage of the app**
- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [x] **API calls use the async/await design pattern via Axios or fetch()**
- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [x] **Each content creator has their own unique URL**
- [x] **The user can edit a content creator to change their name, url, or description**
- [x] **The user can delete a content creator**
- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [x] Picocss is used to style HTML elements
- [x] The content creator items are displayed in a creative format, like cards instead of a list
- [x] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

- [x] Added a pop-up confirmation message for Add, Update, and Delete operations.
- [x] Implemented a loader/spinner to indicate when data is being fetched or posted.
- [x] Implemented redirects for URLs of unknown Creators to handle incorrect URLs.
- [x] Ensured the application is styled to be responsive.
- [x] Utilized the Modal and tooltip component from picocss library.

## Video Walkthrough

Here's a walkthrough of implemented required features:

👉🏿<img src='https://uppzknoubarljwmwhspr.supabase.co/storage/v1/object/public/assets%20for%20creators%20app/Creatorverse%20Demo.gif?t=2023-07-10T23%3A47%3A47.088Z' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->

GIF created with ... 👉🏿 GIF tool here

<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

I faced a challenge where my state was unexpectedly resetting due to additional re-renders. Upon investigation, I found that the issue was caused by using React context at a wrong place. However, I was able to resolve this issue and ensure that the state remains consistent and maintains its values as expected.

## License

Copyright [👉🏿 2023] [👉🏿 Sai Sumanth Goud Parakala]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
