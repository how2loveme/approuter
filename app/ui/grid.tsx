'use client';

import { HotTable, HotTableClass } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';
import { useEffect, useState, useRef } from 'react';

registerAllModules();

type GridProps = typeof initProps

const initProps = {
  data: [
    ['1', '직급', 1, ''],
    ['2', '부장', 2, '1'],
    ['3', '차장', 2, '1'],
    ['4', '과장', 2, '1'],
    ['5', '대리', 2, '1'],
    ['6', '주임', 2, '1']
  ]
}

export default function Grid(props: GridProps = initProps) {
  const [data, setData] = useState(props.data);
  const gridRef = useRef<HotTableClass>(null);
  useEffect(() => {
    console.log('kungs', data);
  }, [data])

  const save = (event: any) => {
    console.log(gridRef.current?.hotInstance?.getData());
  }

  return (
    <>
      <button onClick={save}>save</button>
      <HotTable
        ref={gridRef}
        afterChange={(changes, source) => {
          changes?.forEach(([row, prop, oldValue, newValue]) => {
            console.log(`row: ${row}, col: ${prop}, oldValue: ${oldValue}, newValue: ${newValue}`)
          });
        }}
        data={data}
        rowHeaders={true}
        colHeaders={['code', 'code_name', 'level', 'upper_code']}
        height="auto"
        autoWrapRow={true}
        autoWrapCol={true}
        licenseKey="non-commercial-and-evaluation" // for non-commercial use only
      />
    </>
  )
}