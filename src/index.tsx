/**
 * @class ExampleComponent
 */

import * as React from 'react'
import styles from './styles.scss'

export type Props = { text: string }

export class ExampleComponent extends React.Component<Props> {
  render() {
    const {
      text
    } = this.props

    return (
      <div className={styles.test}>
        Example Componentss: {text}
      </div>
    )
  }
}

export * from './components/card';
