import { getGifs } from '../../src/helpers/getGifs';
describe('GetGifts tests', () => {
    test('should return an array of gifs', async () => {
        const gifts = await getGifs("One punch");
        expect(gifts.length).toBeGreaterThan(0);
        expect(gifts[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    })
});