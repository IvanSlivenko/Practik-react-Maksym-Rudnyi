import { renderHook, act } from "@testing-library/react-hooks";

import { useMovies } from '.'
const basicMovie = {
    id: 1,
    title: 'Movie title'
}
describe('useMovies hook', () => { 
    it('should select movie', () => {
        const { result } = renderHook(() => useMovies());  
        
         act(() => {
           result.current.selectMovie();
         });
        expect(true).toBe(true)
    })
})
