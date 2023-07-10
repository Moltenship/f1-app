import wretch from 'wretch';

export const api = wretch(process.env.API_URL, {
  next: {
    revalidate: 60 * 5,
  },
});
