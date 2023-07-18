/// pre requsite -> webscraping,puppeteer,promises

const puppeteer = require("puppeteer");

const codeObj = require("./codes");
const loginLink = 'https://www.hackerrank.com/auth/login';

const email = "ramami8899@lidely.com";
const password = "1122334455";  ///// this semicolon must be required bcoz after this just below we use ifi function 
// so if we not use semicolon here ifi treats it also as a function 





(async function () {
    try {
// to open chromium we have to code launch
        let browserInstance = await puppeteer.launch({
            headless: false,   ////  bcoz of this our chromium browser appear
            args: ['--start-maximized'],  /// by this our chromium browser open in full-screen mode
            defaultViewport: null
        })

        let newTab =  await browserInstance.newPage();
        await newTab.goto(loginLink);
        await newTab.type("input[id='input-1']", email, { delay: 50 });
        await newTab.type("input[type='password']", password, { delay: 50 });
        await newTab.click('button[data-analytics="LoginPassword"]', { delay: 50 });
        await waitAndClick('.topic-card a[data-attr1="algorithms"]', newTab);
        await waitAndClick('input[value="warmup"]', newTab);
        let allChallenges = await newTab.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled', { delay: 50 });
        console.log('Total questions', allChallenges.length);
    } catch (error) {
        console.log(error);
    }
})();  // IFI FUNCTION //// here we call it imediately by () just after function making it is called ifi immedietely function invoked
//// function completed and called at same place immedietely called ifi






//////   below code is promises code


// browserOpen.then(function (browserObj) {
//     let BrowserOpenPromise = browserObj.newPage();
//     return BrowserOpenPromise;
// }).then(function (newTab) {
//     page = newTab;
//     let hackerrankOpenPromise = newTab.goto(loginLink);
//     return hackerrankOpenPromise;
// }).then(function () {
//     let emailIsEntered = page.type("input[id='input-1']", email, { delay: 50 })
//     return emailIsEntered;
// }).then(function () {
//     let passwordIsEntered = page.type("input[type='password']", password, { delay: 50 })
//     return passwordIsEntered;
// }).then(function () {
//     let loginButtonClicked = page.click('button[data-analytics="LoginPassword"]', { delay: 50 });
//     return loginButtonClicked;
// }).then(function () {
//     let clickOnAlgoPromise = waitAndClick('.topic-card a[data-attr1="algorithms"]', page)
//     return clickOnAlgoPromise;
// }).then(function () {
//     let getToWarmUp = waitAndClick('input[value="warmup"]', page);
//     return getToWarmUp;
//     // }).then(function () {
//     ///  here waitFor function is not defined showing but our code still ok
//     //     let waitFor3Seconds = page.waitFor(3000);    /// 3000 means 3 seconds
//     //     return waitFor3Seconds;
// }).then(function () {
//     let allChallengesPromise = page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled', { delay: 50 });       /// $$ means documnet.queryselectorall function shortform   and $ single dollar means document.queryselector
//     return allChallengesPromise;
// }).then(function (questionArr) {
//     console.log('number of questions', questionArr.length);
//     let questionWillBeSolved = questionSolver(page, questionArr[0], codeObj.answers[0]);
//     return questionWillBeSolved;
// })


// //// wait and click function
// /// we make this function bcoz sometimes our page takes some times for loading
// /// and it's promises already happened and next promise starts functioning but sometimes previous page doesn't loaded
// // so now we try to excess element of that page which is still loading and our code will stuck at that time

// function waitAndClick(selector, cPage) {
//     return new Promise(function (resolve, reject) {
//         let waitForModelPromise = cPage.waitForSelector(selector)
//         waitForModelPromise.then(function () {
//             let clickModel = cPage.click(selector);
//             return clickModel;
//         }).then(function () {
//             resolve();
//         }).catch(function (err) {
//             reject();
//         })
//     })
// }

/// ABOVE WAIT AND CLICK FUNCTION WE MAKE IT JUST 3 LINE CODE 😎
async function waitAndClick(selector, cPage) {
    await cPage.waitForSelector(selector);
    let selectorClicked = cPage.click(selector);
    return selectorClicked;
}

// function questionSolver(page, question, answer) {
//     return new Promise(function (resolve, reject) {
//         let questionWillBeClicked = question.click();
//         return questionWillBeClicked.then(function () {
//             let EditorInFocusPromise = waitAndClick('.monaco-editor.no-user-select.vs', page);
//             return EditorInFocusPromise;
//         }).then(function () {
//             return waitAndClick('.checkbox-input', page);
//         }).then(function () {
//             return page.waitForSelector('textarea.custominput', page);
//         }).then(function () {
//             return page.type('textarea.custominput', answer, { delay: 10 });
//         }).then(function () {
//             let ctrlIsPressed = page.keyboard.down('Control');
//             return ctrlIsPressed;
//         }).then(function () {
//             let AisPressed = page.keyboard.press('A', { delay: 100 });
//             return AisPressed;
//         }).then(function () {
//             let XisPressed = page.keyboard.press('X', { delay: 100 });
//             return XisPressed;
//         }).then(function () {
//             let ctrlIsUnpressed = page.keyboard.up('Control');
//             return ctrlIsUnpressed;
//         }).then(function () {
//             let mainEditorInFocus = waitAndClick('.monaco-editor.no-user-select.vs', page);
//             return mainEditorInFocus;
//         }).then(function () {
//             let ctrlIsPressed = page.keyboard.down('Control');
//             return ctrlIsPressed;
//         }).then(function () {
//             let AisPressed = page.keyboard.press('A', { delay: 100 });
//             return AisPressed;
//         }).then(function () {
//             let VisPressed = page.keyboard.press('V', { delay: 100 });
//             return VisPressed;
//         }).then(function () {
//             let ctrlIsUnpressed = page.keyboard.up('Control');
//             return ctrlIsUnpressed;
//         }).then(function () {
//             return page.click('.hr-monaco__run-code', { delay: 50 })
//         }).then(function () {
//             resolve();
//         }).catch(function (err) {
//             reject();
//         })
//     })
// }



