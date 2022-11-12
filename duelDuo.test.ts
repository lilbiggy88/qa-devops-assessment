
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Check that clicking the Draw button displays the div with id = “choices”', async () => {
    await driver.findElement(By.xpath('//button[text()="Draw"]')).click()
    await driver.sleep(3000)
})

test('Check that clicking an Add to Duo button displays the div with id = “player-duo”', async () => {
await driver.findElement(By.xpath('//button[text()="Add to Duo"]')).click()
await driver.sleep(3000)
})