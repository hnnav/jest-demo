import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import Counter from './Counter'

test('displays correct initial count', () => { 
    const {getByTestId} = render(<Counter initialCount={0}/>)
    const countValue = Number(getByTestId("count").textContent)
    expect(countValue).toEqual(0)
})

test('should increment by 1 if increment button is clicked', () => { 
    const {getByTestId, getByRole} = render(<Counter initialCount={0}/>)
    const incrementButton = getByRole("button", {name: "Increment"})
    // Is count value 0 at the beginning?
    expect(Number(getByTestId("count").textContent)).toEqual(0)
    
    // has count value changed to 1?
    fireEvent.click(incrementButton)
    expect(Number(getByTestId("count").textContent)).toEqual(1)
})

test('should decrement by 1 if decrement button is clicked', () => { 
    const {getByTestId, getByRole} = render(<Counter initialCount={0}/>)
    const decrementButton = getByRole("button", {name: "Decrement"})
    // Is count value 0 at the beginning?
    expect(Number(getByTestId("count").textContent)).toEqual(0)
    
    // has count value changed to 1?
    fireEvent.click(decrementButton)
    expect(Number(getByTestId("count").textContent)).toEqual(-1)
})

test('should be 0 if restart button is clicked', () => { 
    const {getByTestId, getByRole} = render(<Counter initialCount={50}/>)
    const restartButton = getByRole("button", {name: "Restart"})
    expect(Number(getByTestId("count").textContent)).toEqual(50)
    
    fireEvent.click(restartButton)
    expect(Number(getByTestId("count").textContent)).toEqual(0)
})

test('should invert signs if switch button is clicked', () => { 
    const {getByTestId, getByRole} = render(<Counter initialCount={50}/>)
    const switchButton = getByRole("button", {name: "Switch Signs"})
    expect(Number(getByTestId("count").textContent)).toEqual(50)
    
    fireEvent.click(switchButton)
    expect(Number(getByTestId("count").textContent)).toEqual(-50)
})