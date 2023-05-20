import React from 'react'

export default function OnlineQuiz() {
  return (
    <div className='w-64 h-64 mx-auto mb-12'>
      <div class="radio-input">
        <div class="info">
          <span class="question">Select the correct option</span>
          <span class="steps bg-[var(--color2)]">3/10</span>
        </div>
        <input type="radio" id="value-1" name="value-radio" value="value-1" />
        <label for="value-1">He is run really fast</label>
        <input type="radio" id="value-2" name="value-radio" value="value-2" />
        <label for="value-2">He is runnning really fast</label>
        <input type="radio" id="value-3" name="value-radio" value="value-3" />
        <label for="value-3">He are running really fast</label>
        <span class="result success">Congratulations!</span>
        <span class="result error">Wrong answer, try again!</span>
      </div>
    </div>
  )
}
