import React from 'react'
import './Dashboard.css';
import { Category, ChartComponent, ColumnSeries, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective } from '@syncfusion/ej2-react-charts';



function Dashboard() {
   
    const chartData = [
      {id: 1, account: 'Sales', debit: 25000, credit: 0, month: 'Aug'},
      {id: 2, account: 'Sales', debit: 65000, credit: 0, month: 'Sep'},
      {id: 3, account: 'Sales', debit: 52000, credit: 0, month: 'Aug'},
      {id: 4, account: 'Bank', debit: 0, credit: 25000, month: 'Aug'},
      {id: 5, account: 'Purchase', debit: 0, credit: 6500, month: 'Sep'},
      {id: 6, account: 'Purchase', debit: 5000, credit: 25000, month: 'Dec'},
      {id: 7, account: 'Asset', debit: 1000, credit: 0, month: 'Dec'},
      {id: 8, account: 'Purchase', debit: 0, credit: 1200, month: 'Nov'}
    ];
    const primaryxAxis = { valueType: 'Category' };
  return (
    <div className='dashboard'>
      <header>
        <h1>Accounts Dashboard</h1>
      </header>
      <div className='dashboard-cont'>
      <div className='table-cont'>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Account</th>
                    <th>Credit</th>
                    <th>Debit</th>
                    <th>Month</th>
                </tr>
            </thead>
            <tbody>
            {chartData.map(
        (info)=>{
            return(
              
              <tr>
              <td>{info.id}</td>
              <td>{info.account}</td>
              <td>{info.debit}</td>
              <td>{info.credit}</td>
              <td>{info.month}</td>


          </tr>
                )})}
            </tbody>

        </table>
      </div>
      <div className='image-cont'>
      <ChartComponent id='charts' primaryXAxis={primaryxAxis} dataSource={chartData}>
      <Inject services={[ColumnSeries, Legend, LineSeries, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective xName='month' type='Column' yName='credit'/>
        <SeriesDirective xName='month' type='Column' yName='debit'/>
      </SeriesCollectionDirective>
    </ChartComponent>
      </div>
      
      </div>
      <div className='dashboard-banner'>
        <div className='banner-cont banner1'>
          <h2>August</h2>
          <div className='month'>
          <div>
          <h5>Credit</h5>
          <p>77,000</p>
          </div>
          <div>
          <h5>Debit</h5>
          <p>25,000</p>
          </div>
          </div>
        </div>
        <div className='banner-cont banner2'>
          <h2>September</h2>
          <div className='month'>
          <div>
          <h5>Credit</h5>
          <p>65,000</p>
          </div>
          <div>
          <h5>Debit</h5>
          <p>6,500</p>
          </div>
          </div>
        </div>
        <div className='banner-cont banner3'>
          <h2>November</h2>
          <div className='month'>
          <div>
          <h5>Credit</h5>
          <p>0</p>
          </div>
          <div>
          <h5>Debit</h5>
          <p>1,200</p>
          </div>
          </div>
          
        </div>
        <div className='banner-cont banner4'>
          <h2>December</h2>
          <div className='month'>
          <div>
          <h5>Credit</h5>
          <p>6,000</p>
          </div>
          <div>
          <h5>Debit</h5>
          <p>25,000</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
