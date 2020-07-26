import {
  chromium, Browser, BrowserContext, Page,
} from 'playwright';
import {
  PlaywrightVisualRegressionTracker,
} from '@visual-regression-tracker/agent-playwright';
import { config, storyUrl } from './config';

const basicComponent = '?id=vanilla-usage--basic';

jest.setTimeout(30000);

describe('Storybook', () => {
  const browserType = chromium;
  let browser: Browser;
  let context: BrowserContext;
  let page: Page;
  let vrt: PlaywrightVisualRegressionTracker;

  beforeAll(async () => {
    browser = await browserType.launch();
    context = await browser.newContext();
    page = await context.newPage();
    // @ts-ignore wrong config type
    vrt = new PlaywrightVisualRegressionTracker(config, browserType);
  });

  afterAll(() => {
    browser.close();
  });

  it('Basic vanilla usage', async () => {
    await page.goto(storyUrl + basicComponent);

    await vrt.track(page, 'Basic vanilla usage');
  });
});
