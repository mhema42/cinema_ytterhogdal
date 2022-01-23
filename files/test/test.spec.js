import request from 'supertest';
import app from '../../index-app.js';

test('test if movielist is loaded correctly', async () => {
  const response = await request(app)
    .get('/movies')
    .expect(200);

  expect(response.text.includes('The Dark Knight')).toBeTruthy();
  expect(response.text.includes('Idiocracy')).toBeTruthy();
})

test('movie page shows movie details', async () => {
  const response = await request(app)
    .get('/movies/5')
    .expect(200);

  expect(response.text.includes('12 Angry Men')).toBeTruthy();
});