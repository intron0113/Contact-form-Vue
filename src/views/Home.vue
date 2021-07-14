<template>
  <div>
    <div class="form">
      <div class="form-header">
        <span class="form-step">step1</span>
        <p>お客様の情報を入力してください</p>
      </div>
      <div class="form-main">
        <form action="">
          <p>-性別-</p>
          <label><input type="radio" name="sex" value="male" />男性</label>
          <label><input type="radio" name="sex" value="female" />女性</label>
          <p>-生年月日-</p>
          <div>
            <select id="select_year" name="year">
              <option value="">-</option>
              <option value="1945">1945(昭和20年)</option>
              <option value="1946">1946(昭和21年)</option>
              <option value="1947">1947(昭和22年)</option>
              <option value="1948">1948(昭和23年)</option>
              <option value="1949">1949(昭和24年)</option>
              <option value="1950">1950(昭和25年)</option>
              <option value="1951">1951(昭和26年)</option>
              <option value="1952">1952(昭和27年)</option>
              <option value="1953">1953(昭和28年)</option>
              <option value="1954">1954(昭和29年)</option>
              <option value="1955">1955(昭和30年)</option>
              <option value="1956">1956(昭和31年)</option>
              <option value="1957">1957(昭和32年)</option>
              <option value="1958">1958(昭和33年)</option>
              <option value="1959">1959(昭和34年)</option>
              <option value="1960">1960(昭和35年)</option>
              <option value="1961">1961(昭和36年)</option>
              <option value="1962">1962(昭和37年)</option>
              <option value="1963">1963(昭和38年)</option>
              <option value="1964">1964(昭和39年)</option>
              <option value="1965">1965(昭和40年)</option>
              <option value="1966">1966(昭和41年)</option>
              <option value="1967">1967(昭和42年)</option>
              <option value="1968">1968(昭和43年)</option>
              <option value="1969">1969(昭和44年)</option>
              <option value="1970">1970(昭和45年)</option>
              <option value="1971">1971(昭和46年)</option>
              <option value="1972">1972(昭和47年)</option>
              <option value="1973">1973(昭和48年)</option>
              <option value="1974">1974(昭和49年)</option>
              <option value="1975">1975(昭和50年)</option>
              <option value="1976">1976(昭和51年)</option>
              <option value="1977">1977(昭和52年)</option>
              <option value="1978">1978(昭和53年)</option>
              <option value="1979">1979(昭和54年)</option>
              <option value="1980">1980(昭和55年)</option>
              <option value="1981">1981(昭和56年)</option>
              <option value="1982">1982(昭和57年)</option>
              <option value="1983">1983(昭和58年)</option>
              <option value="1984">1984(昭和59年)</option>
              <option value="1985">1985(昭和60年)</option>
              <option value="1986">1986(昭和61年)</option>
              <option value="1987">1987(昭和62年)</option>
              <option value="1988">1988(昭和63年)</option>
              <option value="1989">1989(平成1年)</option>
              <option value="1990" selected>1990(平成2年)</option>
              <option value="1991">1991(平成3年)</option>
              <option value="1992">1992(平成4年)</option>
              <option value="1993">1993(平成5年)</option>
              <option value="1994">1994(平成6年)</option>
              <option value="1995">1995(平成7年)</option>
              <option value="1996">1996(平成8年)</option>
              <option value="1997">1997(平成9年)</option>
              <option value="1998">1998(平成10年)</option>
              <option value="1999">1999(平成11年)</option>
              <option value="2000">2000(平成12年)</option> </select
            >年

            <select id="select_month" name="month">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option> </select
            >月

            <select id="select_day" name="day">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option> </select
            >日
          </div>
        </form>
      </div>
    </div>
    <div class="next-button">
      <button class="btn" type="submit">次に進む ></button>
    </div>
  </div>
</template>
